import React from "react";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
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
              autocomplete="username"
              className={styles.username}
            ></input>
            <input
              placeholder="Password"
              type="password"
              id="pass"
              autocomplete="current-password"
              name="password"
              className={styles.password}
            ></input>
          </div>
        {/* </div> */}
        <div>
          <button className={styles.loginButton} type="submit" disabled="disabled">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
