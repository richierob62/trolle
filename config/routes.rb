Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:index, :create]
    resources :boards, only: [:create, :index, :update, :show] do
      resources :members, only: [:index]
      member do
        post "star"
        post "unstar"
        post "add_recent"
        get "matching"
        post "share"
      end
    end
  end

  root to: "static_pages#root"
end
