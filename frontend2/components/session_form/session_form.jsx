import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className='session-errors-ul'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <span id="landing-tag-line">The one stop shop for <br/> all your beach outing needs!</span>

          <br/>
          <span id="landing-sub-tag-line" >{this.props.alternateLink} {this.props.navLink}</span>
          {this.renderErrors()}
          <div className="login-form">
            <br/>

              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />

            <br/>

              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />

            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
