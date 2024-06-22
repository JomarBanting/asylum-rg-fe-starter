import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import NavBar from '../pages/Landing/Authentication/NavBar';
import { connect } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const { primary_accent_color } = colors;

function HeaderContent(props) {
  const { isAuthenticated } = props;
  const history = useHistory();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = appState => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        {isAuthenticated ? (
          <Link
            to="/profile"
            style={{ color: '#E2F0F7', paddingRight: '75px' }}
          >
            Profile
          </Link>
        ) : (
          <></>
        )}
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>
      </div>

      <Auth0Provider
        domain={domain}
        clientId={clientId}
        onRedirectCallback={onRedirectCallback}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <NavBar />
      </Auth0Provider>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
  };
}

export default connect(mapStateToProps)(HeaderContent);
