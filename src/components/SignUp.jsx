import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";

import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/userDashboard");
    } catch (e) {
      setError(e.message);
      console.log(`error is ${error}`);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <Link to="/login" className={styles.prevPage}>
          ← Wróc do strony logowania
        </Link>
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
          <button className={styles.loginButton} type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
