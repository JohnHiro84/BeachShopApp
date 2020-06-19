class AddImage2Users < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :image_two, :string, default: "default.png"
  end
end
