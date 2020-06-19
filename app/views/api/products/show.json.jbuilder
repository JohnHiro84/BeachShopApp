
json.product do

  json.extract! @product, :id, :name, :description, :product_type, :price, :ave_review
  json.image_url image_path(@product.image_url)


end

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end
