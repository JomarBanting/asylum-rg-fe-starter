import React from 'react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { setAuthState } from '../../../../state/actionCreators';

const Navbar = props => {
  const { Authenticated, dispatch } = props;
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (!isLoading) {
    if (isAuthenticated) {
      dispatch(setAuthState({ isAuthenticated: isAuthenticated, user: user }));
    }
  }

  return (
    <nav>
      {Authenticated ? (
        <LogoutButton></LogoutButton>
      ) : (
        <LoginButton></LoginButton>
      )}
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    Authenticated: state.authReducer.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Navbar);
