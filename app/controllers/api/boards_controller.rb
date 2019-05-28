class Api::BoardsController < ApplicationController
  before_action :require_logged_in

  def index
    @recent_boards = current_user.recently_viewed_boards.limit(4).map { |b| b.id }
    teams = current_user.teams
    owned = current_user.owned_boards.includes(:members)
    member_as_indv = current_user.boards.includes(:members)
    member_via_team = []
    teams.each do |team|
      member_via_team += team.boards.includes(:members)
    end
    hash_check = {}
    @boards = []
    owned.each do |b|
      unless hash_check.has_key?(b.id)
        hash_check[b.id] = true
        @boards << b
      end
    end
    member_as_indv.each do |b|
      unless hash_check.has_key?(b.id)
        hash_check[b.id] = true
        @boards << b
      end
    end
    member_via_team.each do |b|
      unless hash_check.has_key?(b.id)
        hash_check[b.id] = true
        @boards << b
      end
    end
    render :index
  end

  def show
    @board = Board.includes(:members).find(params[:id])
    render :show
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id
    if @board.save
      current_user.shares.create(board_id: @board.id)
      current_user.board_views.create(board_id: @board.id)
      @board = Board.includes(:members).find(@board.id)
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def star
    current_user.board_stars.create(board_id: params[:id])
    @board = Board.includes(:members).find(params[:id])
    render :show
  end

  def add_recent
    current_user.board_views.create(board_id: params[:id])
    @board = Board.includes(:members).find(params[:id])
    render :show
  end

  def unstar
    bs = current_user.board_stars.where(board_id: params[:id]).first
    if bs
      bs.destroy
    end
    @board = Board.includes(:members).find(params[:id])
    render :show
  end

  def update
    @board = Board.find(params[:id])
    member_ids = @board.members.map do |m| m.id end
    render json: ["Unauthorized"], status: 422 unless member_ids.include?(current_user.id)
    @board.title = params[:board][:title]
    if @board.save
      @board = Board.includes(:members).find(@board.id)
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  private

  def board_params
    params.require(:board).permit(:team_id, :title, :image, :visibility, :personal)
  end
end
