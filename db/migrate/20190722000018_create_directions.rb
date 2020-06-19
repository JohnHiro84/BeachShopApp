class CreateDirections < ActiveRecord::Migration[5.0]
  def change
    create_table :directions do |t|
      t.integer :recipe_id, null: false
      t.string :description, null: false
    end
  end
end
