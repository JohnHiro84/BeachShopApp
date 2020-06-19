class Api::ProductsController < ApplicationController
  def index

     @products = Product.all
     render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def create
    @product = current_user.products.new(product_params)
    if @product.save
      render json: @product
    else
      render json: @product.errors.full_messages, status: 422
    end

  end

  def new
    @product = Product.new
    render json: @product
  end

    def edit
      @product = Product.find(params[:id])
      render json: @product
    end

    def update
      @product = Product.find(params[:id])
      if @product.update_attributes(product_params)
        render json: @review

      else
        flash.now[:errors] = @product.errors.full_messages
        render json: @product
      end
    end

  def destroy
    @product = current_user.products.find(params[:id])
    @product.destroy
    render json: @product
  end
  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :image_url, :product_type, :ave_review)
  end
end
