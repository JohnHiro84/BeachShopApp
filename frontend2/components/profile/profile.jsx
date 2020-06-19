import React from 'react';

import { withRouter } from 'react-router-dom';
import { formatImage } from '../../util/review_formatter';

import LoadingIcon from '../product/loading_icon';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: "",
      description: "",
      showHide: 'hide'
    };
    this.handleProfilePictureUpdate = this.handleProfilePictureUpdate.bind(this);
    this.handleDescriptionUpdate = this.handleDescriptionUpdate.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.update = this.update.bind(this);

  }


  componentDidMount(){
    this.setState({
      avatar_url: this.props.user.image_two,
      description: this.props.user.description
    })
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleProfilePictureUpdate(e){
    e.preventDefault();

    let copyUser = this.props.user;
    copyUser.image_two = this.state.avatar_url;
    copyUser.avatar_url = this.props.user.image_two;

    this.props.updateUser(copyUser);

  }


  handleDescriptionUpdate(e){

    e.preventDefault();
    let copyUser = this.props.user;
    copyUser.description = this.state.description;
    copyUser.avatar_url = this.props.user.image_two;

    this.props.updateUser(copyUser);
  }
  toggleEdit(e){
    e.preventDefault();
    if(this.state.showHide === "hide"){
      this.setState({showHide: 'show'});
      document.getElementById('edit-profile').className = "show-edit-profile"
    } else {
      this.setState({showHide: 'hide'});
      document.getElementById('edit-profile').className = "hide-edit-profile"

    }
  }

  render() {
    const { loading, user } = this.props;
      if (loading) {
          return <section ><LoadingIcon /></section>;
        }

    return (
      <section className="profile-container container">
        <h1>Your Profile</h1>
        <img src={user.avatar_url} alt ={user.username} />
        <h1>{user.username}</h1>
        <p className='profile-description'>{user.description}</p>

        <button id='toggle-profile-button' className="profile-picture-button button" onClick={this.toggleEdit}>Edit Profile</button>

        <div id="edit-profile" className='hide-edit-profile'>

          <input
            type="text"
            value={this.state.avatar_url}
            placeholder={ user.image_two}
            onChange={this.update('avatar_url')}
          />
          <br/>
          <button className="profile-picture-button button" id="profile-button" onClick={this.handleProfilePictureUpdate}>Update Profile Picture</button>
          <br/>

          <textarea
            type="text"
            value={this.state.description}
            placeholder={ user.description}
            onChange={this.update('description')}
          />

          <br/>
          <button className="profile-picture-button button" id="profile-button2" onClick={this.handleDescriptionUpdate}>Update Profile Description</button>

        </div>
      </section>
    );
  }
}

export default withRouter(Profile);
