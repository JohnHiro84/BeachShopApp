class CreatePurchasesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :cust_orders do |t|
      t.integer :user_id, null: false
      t.integer :total_price, null: false
      t.string :products, null: false
      t.string :status, null: false
      t.timestamps
    end
  end
end
