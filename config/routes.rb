Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  devise_for :users, :controllers => {sessions: 'sessions',
                                      registrations: 'registrations'}

  post 'facebook_login', to: 'third_party_auth#facebook'

  # keep this at the very bottom!
  get '*unmatched_route', to: 'home#index'
end
