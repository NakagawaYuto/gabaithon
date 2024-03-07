Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  mount ActionCable.server => '/cable'
  
  resources :elderly_people
  resources :parents
  resources :children
  resources :chats
  resources :evaluations
end
