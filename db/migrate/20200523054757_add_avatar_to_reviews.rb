class AddAvatarToReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :avatar_url, :string, default: "default.png"
  end
end
