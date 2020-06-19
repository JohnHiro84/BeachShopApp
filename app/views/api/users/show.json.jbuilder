json.extract! @user, :username, :id, :session_token, :password_digest, :description, :image_two
json.avatar_url image_path(@user.avatar_url)

json.partial! 'api/users/user', user: @user
