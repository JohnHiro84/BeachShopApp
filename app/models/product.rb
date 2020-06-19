
class Product < ApplicationRecord
    validates :name, :product_type, :description, :price, :image_url, presence: true

    has_many :reviews,
      class_name: :Review,
      dependent: :destroy


end
