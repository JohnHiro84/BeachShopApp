class CreateReviewsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer  "product_id",  null: false
      t.integer  "star_count", null: false
      t.string   "heading",    null: false
      t.string   "text",       null: false
      t.string   "author"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
