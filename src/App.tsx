import "./App.css";
import { useAuth } from "react-oidc-context";

export default function App() {
  const auth = useAuth();

  return (
    <div className="App">
      {auth.isLoading ? (
        <Loading />
      ) : auth.isAuthenticated ? (
        <Home />
      ) : (
        <Login />
      )}
    </div>
  );
}

function Loading() {
  return (
    <div className="card border-dark shadow">
      <div className="card-body">
        <div className="text-center text-primary">
          <div className="spinner-border"></div>
          <div className="h1 text-primary mt-3">Loading...</div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const auth = useAuth();

  const signOut = () => {
    auth.signoutRedirect();
  };

  const epochToLocal = (epoch: number) => {
    const d = new Date(epoch * 1000);
    return d.toLocaleString();
  };

  return (
    <>
      <div className="card border-dark shadow mb-2">
        <div className="card-body">
          <h4 className="card-title" id="card-title">
            Trimble Identity Demo
          </h4>
          <h5 className="card-subtitle mb-2 text-muted" id="card-subtitle">
            Welcome
          </h5>
          <img
            className="profile_image"
            src={auth.user?.profile?.picture}
            alt="Profile Picture"
          />

          <p className="card-text">
            {auth.user?.profile?.given_name} {auth.user?.profile?.family_name}
          </p>
          <p className="card-text">
            {auth.user?.profile?.email}{" "}
            {auth.user?.profile.email_verified ? "(Verified)" : ""}
          </p>
          <p className="card-text">
            Token Expires:{" "}
            {auth.user?.expires_at ? epochToLocal(auth.user?.expires_at) : ""}
          </p>
          <button className="btn btn-primary" onClick={signOut}>
            Sign Out
          </button>
        </div>
      </div>
      {/* <p>{auth.user?.id_token}</p> */}
    </>
  );
}

function Login() {
  const auth = useAuth();

  const signIn = () => {
    console.log("Login");
    auth.signinRedirect();
  };

  return (
    <div className="card border-dark shadow">
      <div className="card-body">
        <h4 className="card-title" id="card-title">
          Trimble Identity Demo
        </h4>
        <h5 className="card-subtitle mb-2 text-muted" id="card-subtitle">
          Sign In
        </h5>
        <p className="card-text">
          Click the sign in button to login using Trimble Identity
        </p>
        <button className="btn btn-primary" onClick={signIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
