class Api::CardsController < ApplicationController
  def create
    @list = List.find(params[:list_id])
    @list.cards.create(card_params)
    @board = Board.find(@list.board_id)
    render "api/boards/show.json.jbuilder"
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :order)
  end
end
