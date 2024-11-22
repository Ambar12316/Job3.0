
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-aafvxstnl3c0t3q0.us.auth0.com"
    clientId="HPnTzANZnA7s666KFV1Vm3mENtLLWooh"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  
);