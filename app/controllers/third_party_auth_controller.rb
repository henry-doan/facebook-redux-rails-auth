class ThirdPartyAuthController < ApplicationController
	skip_before_action :verify_authenticity_token
  def facebook
  	auth = params[:auth]
  	# need to implement from third party auth in user
  	@user = User.from_third_party_auth('facebook', auth)

  	if @user.persisted?
  		sign_in(@user, event: :authenticated)
  		render json: @user
  	else
  		render json: {errors: auth}, status: 401
  	end
  end
end
