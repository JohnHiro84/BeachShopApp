class Taggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :recipe_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
  end
end
