class Api::BoardsController < ApplicationController
  before_action :require_logged_in

  def index
    @recent_boards = current_user.recently_viewed_boards.limit(4).map { |b| b.id }
    teams = current_user.teams
    owned = current_user.owned_boards.includes(:teams).includes(:members)
    member_as_indv = current_user.boards.includes(:teams).includes(:members)
    member_via_team = []
    teams.each do |team|
      member_via_team += team.boards.includes(:teams).includes(:members)
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

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id
    if @board.save
      current_user.shares.create(board_id: @board.id)
      current_user.board_views.create(board_id: @board.id)
      if params[:team_id] != "-1"
        team = Team.find(params[:team_id])
        team.shares.create(board_id: @board.id)
      end
      @board = Board.includes(:teams).includes(:members).find(@board.id)
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def star
    current_user.board_stars.create(board_id: params[:id])
    @board = Board.includes(:teams).includes(:members).find(params[:id])
    render :show
  end

  def add_recent
    current_user.board_views.create(board_id: params[:id])
    @board = Board.includes(:teams).includes(:members).find(params[:id])
    render :show
  end

  def unstar
    bs = current_user.board_stars.where(board_id: params[:id]).first
    if bs
      bs.destroy
    end
    @board = Board.includes(:teams).includes(:members).find(params[:id])
    render :show
  end

  private

  def board_params
    params.require(:board).permit(:title, :starred, :image, :visibility)
  end
end
