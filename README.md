# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

### 🚀 Create React app

Create new react application with create-react-app

```bash
npx create-react-app@latest tdp-react-auth-example --template typescript
```

Start the development server

```bash
npm start
```

### 👩‍🚒 Create Trimble Console application

Fom the [Trimble Cloud Console](https://console.trimble.com/home/applications/list) create an application with <i>Authorization Code Grant</i> and http://localhost:3000 for both callback urls.

Navigate to the Applications list and click "ADD APPLICATION"

Application Type

<img alt="Create application - type" src="./docs/assets/create-app-1.png" width=500 />

Application Details

<img alt="Create application - details" src="./docs/assets/create-app-2.png" width=500 />

Appplication Configuration

<img alt="Create application - configuration" src="./docs/assets/create-app-3.png" width=500 />

### 🌈 Add Modus styesheet

Add the Modus css styles. We are using the most basic setup for Modus to keep things simple.

```bash
npm install --save-dev @trimbleinc/modus-bootstrap
```

Import the Modus stylesheet and remove the defaults.

```css
/* src/index.css */
@import "../node_modules/@trimbleinc/modus-bootstrap/dist/modus.min.css";

/* delete default styles */
/*
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} 
*/
```

### 🔒 Add authentication libraries

This demo uses the [oidc typescript client](https://www.npmjs.com/package/oidc-client-ts) and [React oidc context extension](https://www.npmjs.com/package/react-oidc-context) for Trimble Identity authentication. These libraries greatly simplify the process of

```bash
npm install oidc-client-ts react-oidc-context
```

## ⚙ Configure Authentication

### Trimble Console configuration

Capture the following fields from you Trimble Console application:

- Name
- Domain
- Client Id

<img alt="Console Credentials" src="./docs/assets/console-creds.png" width=400 />

### Configure index.tsx

Import the AuthProvider

```tsx
// src/index.tsx
...
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const authProps: AuthProviderProps = {
  authority: "<Domain>",
  client_id: "<Client Id>",
  redirect_uri: "http://localhost:3000",
  scope: "openid <Name>",
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
```

Create a
