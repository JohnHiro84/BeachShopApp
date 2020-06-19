class CustOrder < ApplicationRecord
  validates :user_id, :total_price, :products, presence: true
  validates :status, inclusion: { in: ["pending", "shipped", "fulfilled"] }, presence: true

    belongs_to :user,
      class_name: 'User',
      foreign_key: :user_id
end
