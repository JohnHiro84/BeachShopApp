class Review < ApplicationRecord
  validates :product_id,:heading, :text, presence: true
  validates :star_count, inclusion: { in: [1,2,3,4,5] }, presence: true

    belongs_to :product,
      class_name: 'Product',
      foreign_key: :product_id
end
