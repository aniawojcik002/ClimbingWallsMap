import React, {useState} from "react";

import {Link} from 'react-router-dom';

import styles from "./SignUp.module.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    }).catch((error) => console.log(error))
  }

  return (
      <div className={styles.mainWrapper}>
      <form onSubmit={signUp} className={styles.wrapper}>
      <Link to="/Login" className={styles.prevPage}>← Wróc do strony logowania</Link>
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
            minLength="8"
            value={password}
            onChange={passwordHandler}
          ></input>
          <input
            placeholder="Repeat password"
            type="password"
            id="pass"
            autoComplete="current-password"
            minLength="8"
            name="password"
            className={styles.password}
            required
          ></input>
        </div>
        <div>
          <button
            className={styles.loginButton}
            type="submit"
          >
            Sign Up
          </button>
        </div> 
        </form>
      </div>
  );
};

export default SignUp;
