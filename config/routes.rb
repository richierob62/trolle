Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:index, :create]
    resources :boards, only: [:create, :index, :update, :show] do
      member do
        post "star"
        post "unstar"
        post "add_recent"
      end
    end
  end

  root to: "static_pages#root"
end
