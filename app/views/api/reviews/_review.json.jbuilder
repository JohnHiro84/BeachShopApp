json.extract! review, :id, :product_id, :star_count, :heading, :text, :author, :created_at, :updated_at
json.avatar_url image_path(review.avatar_url)
