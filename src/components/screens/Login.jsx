import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


// https://developers.google.com/identity/gsi/web/reference/js-reference

const Login = () => {
  const { handleGoogle, loading, error } = useFetch(
    'http://localhost:8080/login'
  );

  // const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  // console.log(GOOGLE_CLIENT_ID);

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: '147826279872-jr962huf8k6r17b68pd7ihq32catnao6.apps.googleusercontent.com',
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
  <>
      <nav style={{ padding: "1rem" }}>
        <Link to="/" style={{
            textDecoration: "none",
            color: "black",
            hover: "#2980b9",
            
            border: "1px solid grey",
            padding: "0.5rem 1rem",
            backgroundColor: "whitesmoke",
            borderRadius: "4px",
            // color: "#333",
          }}>Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h4>Login to continue</h4>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
      </main>
      <footer></footer>
    </>
  );
};

export default Login;
