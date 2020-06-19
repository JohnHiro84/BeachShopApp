class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review =  Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end

  end
  def new
    @review = Review.new
    render json: @review
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      flash.now[:errors] = @review.errors.full_messages
      render json: @review
    end
  end

  def edit
    @review = Review.find(params[:id])
    render json: @review
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render json: @review

    else
      flash.now[:errors] = @review.errors.full_messages
      render json: @review
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: @review
  end
  private

  def review_params
    params.require(:review).permit(:product_id, :star_count, :heading, :text, :author, :avatar_url)
  end
end
