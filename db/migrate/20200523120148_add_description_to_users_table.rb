class AddDescriptionToUsersTable < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :description, :string, default: "My Description"

  end
end
