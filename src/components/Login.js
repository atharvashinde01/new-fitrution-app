import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../css/Login.css";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.User.user);
  if (user) {
    history.push("/home");
  }

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // It succesfully created a new user with email & password
        console.log(auth);
        if (auth) {
          history.push("/home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://firebasestorage.googleapis.com/v0/b/new-fitrution-app.appspot.com/o/FitrutionLogo.jpeg?alt=media&token=5d730a95-6ea2-4cb3-9047-bafd40fc3fa6"
          alt="Img"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-Mail Address</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Fitrution's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Fitrution Account
        </button>

        <button className="googleLoginButton">
          <img
            className="googleImage"
            src="https://firebasestorage.googleapis.com/v0/b/new-fitrution-app.appspot.com/o/Google_Icon.png?alt=media&token=50122e0d-c265-497c-9e41-7e40ff8fd0de"
            alt="G"
          />
          Login using Google
        </button>
      </div>
    </div>
  );
}

export default Login;
