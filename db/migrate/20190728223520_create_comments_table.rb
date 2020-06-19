class CreateCommentsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :recipe_id, null: false
      t.string :body, null: false
      t.string :author
      t.timestamps
    end
  end
end
