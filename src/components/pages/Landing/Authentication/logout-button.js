import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { setAuthState } from '../../../../state/actionCreators';

const LogoutButton = ({ dispatch }) => {
  const { logout } = useAuth0();

  const onClickLogOut = () => {
    dispatch(setAuthState({ isAuthenticated: false, user: null }));
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div>
      <button
        style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        onClick={() => onClickLogOut()}
      >
        Log Out
      </button>
    </div>
  );
};

export default connect()(LogoutButton);
