import React from 'react';

import { withRouter, Redirect } from 'react-router-dom';
import { formatReview, formatImage } from '../../util/review_formatter';
import { updateProduct } from '../../util/product_api_util';

class ReviewFormUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      star_count: '',
      heading: '',
      text: '',
      author: "",
      product_id: "",
      avatar_url: "",
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.starSetter = this.starSetter.bind(this);
    this.starNumberExtractor = this.starNumberExtractor.bind(this);
    this.pullingInitialStateData = this.pullingInitialStateData.bind(this);
    this.updateProductAveReview = this.updateProductAveReview.bind(this);
    this.checkIfRedirectNeeded = this.checkIfRedirectNeeded.bind(this);
  }

  pullingInitialStateData(){

    this.setState({
      product_id: this.props.currentProduct.product.id,
      avatar_url: this.props.currentUser.image_two,
      author: this.props.currentUser.username
    });

    if(this.props.previousReview !== undefined){

      this.setState({
        star_count : this.props.previousReview.star_count,
        heading: this.props.previousReview.heading,
        text: this.props.previousReview.text
      });
    }
  }

  componentDidMount(){

    //if coming directly to the review form without loading a current product first
    if(this.props.redirectError){
      console.log('redirect error, need to come from a products page first')
      return;
    }

    this.pullingInitialStateData();
  }

  handleSubmit(e) {
    e.preventDefault();

    let output_object = formatReview(this.state);

    if(Object.keys(output_object).includes('errors') ){
      this.setState({'errors' : output_object['errors']});
      return;
    }
    //if the review is to be edited rather than a new one, grab it's old id
    if(this.props.previousReview){
      output_object['id'] = this.props.previousReview.id;
    }

    this.props.buttonReview(output_object)
    .then(data => this.props.history.push(`/api/products/${this.state.product_id}`));

    this.setState({heading: '', text: '', star_count: "", errors: []});

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors(){

    if (this.state.errors.length > 0) {
      return (
        this.state.errors.map(error => {
          return (<li className="review-form-error-li" key={error}>{error}</li>);
        })
      );
    } else {
      return ""
    }
  }
  updateProductAveReview(starId){

    let average = (this.props.averageReview.total_stars + starId) / (this.props.averageReview.num_reviews + 1);
    let productToUpdate = this.props.currentProduct.product;
    productToUpdate['ave_review'] = average.toFixed(2).toString();

    updateProduct(productToUpdate);
  }


  starSetter(starId){
    if(!starId){
      return;
    }
    for(let i =1; i<=5; i++){
      if(i <= starId){
        document.getElementById('star-' + i.toString()).className = "star-review star-review-yellow";
      } else {
        document.getElementById('star-' + i.toString()).className = "star-review star-review-gray";
      }
      this.updateProductAveReview(starId);
    }

    //updateState;
    this.setState({ star_count: starId});
  }

  starNumberExtractor(e){
    let starIdStr, starId;

    e.preventDefault();
    starIdStr = e.target.id;
    starId = Number(starIdStr[starIdStr.length-1]);
    this.starSetter(starId);
  }

  checkIfRedirectNeeded(){
    let redirection;

    ///coming from redirectError prop set in review_form_container
    redirection = (this.props.redirectError) ? <Redirect to='/api/products' /> : ""

    //user left a review previously & this is the new form, they should be at edit
    if (this.props.hasUserLeftReview && this.props.newOrEdit === 'new' ){
      console.log("this.props.hasUserLeftReview && this.props.newOrEdit === 'new' ")
      redirection = <Redirect to='/api/editReview' />

      //user has not left a review previously & this is the edit form, they should be at new
    } else if ((this.props.hasUserLeftReview === false) && this.props.newOrEdit === 'edit' ){
      console.log("this.props.hasUserLeftReview === false) && this.props.newOrEdit === 'edit'");
      redirection = <Redirect to='/api/newReview' />
    }
    return redirection;
  }

  render() {
    const { redirectError, currentProduct, newOrEdit, previousReview } = this.props;

    let reviewText = (newOrEdit === "new") ? "Leave a Review" : "Edit Review";

    let redirection = this.checkIfRedirectNeeded();

    return (
      <section className="review-form-section">
        {redirection}

        <ul className="review-form-errors-ul">
          {this.errors()}
        </ul>

        <form className="review-form" onSubmit={this.handleSubmit}>

          <h2>{reviewText}</h2>

          <span key={0} id="star-1" className="star-review star-review-gray" onClick={this.starNumberExtractor}></span>
          <span key={1} id="star-2" className="star-review star-review-gray" onClick={this.starNumberExtractor}></span>
          <span key={2} id="star-3" className="star-review star-review-gray" onClick={this.starNumberExtractor}></span>
          <span key={3} id="star-4" className="star-review star-review-gray" onClick={this.starNumberExtractor}></span>
          <span key={4} id="star-5" className="star-review star-review-gray" onClick={this.starNumberExtractor}></span>

          <input
            type="text"
            value={this.state.heading}
            placeholder={ "heading"}
            onChange={this.update('heading')}
          />

          <textarea
            id="review-form-textarea"
            type="text"
            value={this.state.text}
            placeholder={"text"}
            onChange={this.update('text')}
          />

          <button className="review-form-button button">{reviewText}</button>

        </form>
      </section>
    );
  }
}

export default withRouter(ReviewFormUpdate);
