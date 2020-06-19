class AddAverageReviewToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :ave_review, :string, default: "0"
  end
end
