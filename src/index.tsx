import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const authProps: AuthProviderProps = {
  authority: "https://stage.id.trimblecloud.com",
  client_id: "96ef14e7-50ef-46cc-9f0c-bb2d8649b3df",
  redirect_uri: "http://localhost:3000",
  scope: "openid tdp-react-auth",
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider {...authProps}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
