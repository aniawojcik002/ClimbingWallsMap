import React, {useState} from "react";
import {Link} from "react-router-dom";

import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "./firebase";
import AuthDetails from "./AuthDetails";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => console.log(error))
  }

  return (
    <div className={styles.mainWrapper}>
      <form onSubmit={signIn} className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h3 className={styles.welcomeText}>
            Welcome back!</h3>
          <h4 className={styles.secondaryText}>Welcome back! Please enter your details.</h4>
        </div>
          <div className={styles.inputWrapper}>
            <input
              placeholder="Username"
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              className={styles.username}
              value={email}
              onChange={emailHandler}
            ></input>
            <input
              placeholder="Password"
              type="password"
              id="pass"
              autoComplete="current-password"
              name="password"
              className={styles.password}
              value={password}
              onChange={passwordHandler}
            ></input>
          </div>
        <div>
          <button className={styles.loginButton} type="submit">Log in</button>
          <p>Don't have an account?</p> 
          <Link to='/signup'> Register here </Link>
        </div>
      </form>
      <AuthDetails/>
    </div>
  );
};

export default Login;
