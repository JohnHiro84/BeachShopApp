import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import LoadingIcon from '../product/loading_icon';

class Scout extends React.Component {

    constructor(props){
      super(props)
      this.state = { phrase: ''
      }
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleTermChange(e){
      this.setState({phrase: e.target.value});

    }


    handleSearch(e){

      e.preventDefault();
      if(Object.keys(this.props.products).length <= 1 ){
        this.props.fetchProducts();
      }
      this.props.receiveSearchTerm(this.state.phrase);
      this.props.history.push(`/api/searchResults`);

    }

    handleLinkClick(e){

      if(Object.keys(this.props.products).length <= 1 ){
        this.props.fetchProducts();
      }

      document.getElementById('search-field').value = e.target.innerHTML;
      this.setState({phrase: e.target.innerHTML});
      this.props.receiveSearchTerm(e.target.innerHTML);
      this.props.history.push(`/api/searchResults`);

    }

  render(){
    const showNothing = () => (
      <>
      </>
    );
    const showSearchBar = () => (

      <div className="search-bar" >

        <div className="search-bar-fields">
          <input id="search-field" placeholder="Search for beach products!" onChange={this.handleTermChange}/>
          <button className="search-bar-submit" type="button" onClick={this.handleSearch}>Search</button>
          <ul className="search-links">
            <li onClick={this.handleLinkClick}>Fun in the Sun</li>
            <li onClick={this.handleLinkClick}>Leisure</li>
            <li onClick={this.handleLinkClick}>Apparel</li>

            <li onClick={this.handleLinkClick}>Food and Drinks</li>
          </ul>
        </div>
        {<p></p>}
      </div>

    );

    const {currentUser, loading} = this.props;

    let ifLoading = "";
    if (loading) {
       ifLoading = <LoadingIcon />
    }

    return (
      <>
        {currentUser ? showSearchBar() : showNothing()}
        {ifLoading}
      </>
    )
  }

}
export default withRouter(Scout);
