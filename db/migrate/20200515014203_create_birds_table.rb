class CreateBirdsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :birds_tables do |t|
      t.string :birdname, null: false
    end
  end
end
