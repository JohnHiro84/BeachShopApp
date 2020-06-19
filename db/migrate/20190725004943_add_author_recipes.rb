class AddAuthorRecipes < ActiveRecord::Migration[5.0]
  def change
        add_column :recipes, :author, :string
  end
end
