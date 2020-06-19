
@cust_orders.each do |cust_order|
  json.set! cust_order.id do
    json.extract! cust_order, :id, :user_id, :products, :total_price, :status, :created_at

  end
end
