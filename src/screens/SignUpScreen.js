import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";
function SignUpScreen() {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <div className="signupScreen__credentials">
        <form>
          <h1>Sign In</h1>
          <input ref={emailref} type="email" placeholder="Email" />
          <input ref={passwordref} type="password" placeholder="Password" />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <div className="signupScreen__info">
          <div className="signupScreen__rememberMe">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="signupScreen__needHelp">
            <p>Need help?</p>
          </div>
        </div>
        <div className="signupScreen__facebook">
          <img
            src="https://skylineentourage.com/wp-content/uploads/2018/07/Facebook-Logo-540x540.png"
            alt=""
          />
          <p>Login with Facebook</p>
        </div>
        <div className="signupScreen__signUp">
          <p className="signup__grey">
            New to Netflix?{" "}
            <span className="signup__link" onClick={register}>
              Sign up now.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpScreen;
