class Likes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false
      t.boolean :is_true, default: true
      t.timestamps
    end
  end
end
