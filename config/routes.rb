Rails.application.routes.draw do
  resources :articles
  post 'articles/attach', to: 'articles#attach'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
