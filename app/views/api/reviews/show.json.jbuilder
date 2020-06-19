json.review do
  json.extract! @review, :id, :product_id, :star_count, :heading, :text, :author
end
