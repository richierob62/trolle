class Api::BoardsController < ApplicationController
  before_action :require_logged_in

  def index
    @recent_boards = current_user.recently_viewed_boards.limit(5).map { |b| b.id }
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
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :starred, :image, :visibility)
  end
end
