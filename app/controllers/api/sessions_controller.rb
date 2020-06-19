class Api::SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Invalid credentials. Please try again.'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    if :current_user
      logout!
      render json: { }
    end

  end
end
