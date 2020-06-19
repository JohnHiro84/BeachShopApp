import { connect } from 'react-redux';
import {updateUser} from '../../actions/session_actions';

import Profile from './profile';


const mapStateToProps = ({ entities, ui, session }) => {

  let user = entities.users[session.id];
  let loading = ui.loading.detailLoading;

    return {
      user: user,
      loading: loading

    };
};

const mapDispatchToProps = dispatch => ({
  updateUser: user => updateUser(dispatch(updateUser(user)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
