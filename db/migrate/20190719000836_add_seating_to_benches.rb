class AddSeatingToBenches < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :seating, :integer, default: 2, null: false


  end
end
