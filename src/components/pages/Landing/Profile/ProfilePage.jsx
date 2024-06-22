import React from 'react';
import { connect } from 'react-redux';
import { NotFoundPage } from '../../NotFound';

const Profile = props => {
  const { user, isAuthenticated } = props;

  if (!isAuthenticated && user === null) {
    return (
      <div>
        <NotFoundPage></NotFoundPage>
      </div>
    );
  }

  const { name, picture, email } = user;

  return (
    <div
      style={{
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1>Profile Page</h1>
      <div>
        <img src={picture} alt="Profile" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
    isAuthenticated: state.authReducer.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Profile);
