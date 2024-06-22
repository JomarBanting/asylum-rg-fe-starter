import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button
        style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
      <button
        style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        onClick={() =>
          loginWithRedirect({
            authorizationParams: {
              screen_hint: 'signup',
            },
          })
        }
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginButton;
