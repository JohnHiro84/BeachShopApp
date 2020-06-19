class Api::CustOrdersController < ApplicationController
  def index

     @cust_orders = CustOrder.all.where(user_id: current_user.id)
     render :index
  end

  def show

    @cust_order = CustOrder.find(params[:id])

    render :show
  end

  def create

    puts cust_order_params

    @cust_order = CustOrder.new(cust_order_params)
    if @cust_order.save
      render json: @cust_order
    else
      render json: @cust_order.errors.full_messages, status: 422
    end

  end
  def new
    @cust_order = CustOrder.new
    render json: @cust_order
  end

  def edit
    @cust_order = CustOrder.find(params[:id])
    render json: @cust_order
  end

  def update
    @cust_order = current_user.cust_orders.find(params[:id])
    if @cust_order.update_attributes(cust_order_params)
      render json: @cust_order

    else
      flash.now[:errors] = @cust_order.errors.full_messages
      render json: @cust_order
    end
  end

  def destroy
    @cust_order = current_user.cust_orders.find(params[:id])
    @cust_order.destroy
    render json: @cust_order
  end
  private

  def cust_order_params
    params.require(:cust_order).permit(:user_id, :total_price, :status, :products)
  end
end
