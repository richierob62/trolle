class Api::TeamsController < ApplicationController
  before_action :require_logged_in

  def index
    @teams = current_user.teams
    render :index
  end
end
