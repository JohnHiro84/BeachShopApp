
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :product_id, :star_count, :heading, :text, :author
  end
end
