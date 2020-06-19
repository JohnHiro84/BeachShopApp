Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  root to: 'static_pages#root'


  # namespace :api do
  #   resource :session, only: [:new]
  #   resources :users, only: [:new]
  # end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resources :products, only: [:show, :index, :update, :create, :destroy] do
      resources :reviews, only: [:index, :create]
    end
    resources :reviews, only: [:create, :index, :show, :destroy, :update]
    resources :cust_orders, only: [:create, :index, :show, :destroy, :update]

    resource :session, only: [:create, :destroy]


    #
    # resources :benches, only: [:create, :index, :show]
    #
    # resources :recipes, only: [:create, :index, :show, :destroy, :update] do
    #   resources :ingredients, only: [:index, :create]
    #   resources :directions, only: [:index, :create]
    #   resources :comments, only: [:index, :create]
    #   resources :likes, only: [:index, :create]
    # end
    #
    # resources :ingredients, only: [:show, :update, :destroy]
    # resources :directions, only: [:show, :update, :destroy]
    # resources :likes, only: [:update, :destroy]
    # , only: [:create, :index, :show]
  end



end
