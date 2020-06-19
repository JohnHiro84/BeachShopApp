class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      # t.integer :author_id, null: false
      t.string :title, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
