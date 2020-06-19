
@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :description, :product_type, :price, :ave_review
    json.image_url image_path(product.image_url)

  end
end
