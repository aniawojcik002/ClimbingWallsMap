import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../context/AuthContext";

const Login = () => {
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

  const { login } = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/userDashboard");
    } catch (e) {
      setError(e.message);
      console.log(`error is ${error}`);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <form onSubmit={handleLogin} className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h3 className={styles.welcomeText}>Welcome back!</h3>
          <h4 className={styles.secondaryText}>
            Welcome back! Please enter your details.
          </h4>
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
          <button className={styles.loginButton} type="submit">
            Log in
          </button>
          <p>Don't have an account?</p>
          <Link to="/signup"> Register here </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
