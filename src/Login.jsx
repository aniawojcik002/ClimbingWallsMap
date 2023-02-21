import React from "react";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.mainWrapper}>
      <div>
        <p>Welcome back! Please enter your details.</p>
        <div className={styles.loginWrapper}>
          <div className={styles.labelWrapper}>
            <label for="username">Username</label>
            <label for="pass">Password</label>
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.username}
            ></input>
            <input
              type="password"
              id="pass"
              name="password"
              className={styles.password}
            ></input>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
