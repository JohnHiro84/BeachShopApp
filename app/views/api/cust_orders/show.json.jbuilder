
json.cust_order do
  json.extract! @cust_order, :id, :user_id, :products, :total_price, :status
  # json.image_url image_path(@purchase.image_url)

end
