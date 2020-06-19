import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router-dom';
import LoadingIcon from '../product/loading_icon';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
    this.slideShow = this.slideShow.bind(this);
    this.handleClick = this.handleClick.bind(this);

  };

  componentDidMount() {
    this.slideShow();
  }

  slideShow(){
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if(slides.length < 1){
      return;
    }


    for(i=0; i< slides.length; i++){
      slides[i].style.display = 'none';
    }

    for(i = 0; i< dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex].style.display = 'block';

    dots[this.state.slideIndex].className += " active";

    let plusOne = this.state.slideIndex + 1;
    this.setState({slideIndex: plusOne})

    if (this.state.slideIndex >= slides.length){
      this.setState({slideIndex: 0});
    }

    setTimeout(this.slideShow, 3500);
  }


  handleClick(e){
    if(Object.keys(this.props.products).length <= 1 ){
      this.props.fetchProducts();

    }
    // this.props.fetchProducts();
    this.props.receiveSearchTerm(e.target.children[0].id);
    this.props.history.push(`/api/searchResults`);
  }

  render() {

    const { loading } = this.props;

    if (loading) {
      return <></>
    }
    return (
      <div className='main-container container'>

        <div className="slideshow-container">
          <div className="mySlides fade" id="slide-image-1" onClick={this.handleClick}>
            <span id='Casual'></span>
            <div className="numbertext"></div>
            <img className="slide-image"  />
            <div className='slide-text'> Browse our Casual beach wear!</div>
          </div>

          <div className="mySlides fade" id="slide-image-2" onClick={this.handleClick}>
            <span id='Fun'></span>
            <div className="numbertext"></div>
            <img className="slide-image" />
            <div className='slide-text'> Check out fun new merchandise!</div>
          </div>

          <div className="mySlides fade" id="slide-image-3" onClick={this.handleClick}>
            <span id='Leisure'></span>
            <div className="numbertext"></div>
            <img className="slide-image" />
            <div className='slide-text'> 10% off Leisure products</div>
          </div>

          <div className="mySlides fade" id="slide-image-4" onClick={this.handleClick}>
            <span id='Drink'></span>
            <div className="numbertext"></div>
            <img className="slide-image" />
            <div className='slide-text'> Browse our drink items!</div>
          </div>

          <div className="mySlides fade" id="slide-image-5" onClick={this.handleClick}>
            <span id='Sports'></span>
            <div className="numbertext"></div>
            <img className="slide-image" />
            <div className='slide-text'> We updated our beach sports products!</div>
          </div>
        </div>
        <div className='div-of-dots'>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <script>

        </script>
      </div>
    );
  }
}

export default withRouter(Main);
