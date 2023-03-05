import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, {useEffect, useState} from 'react';
import {auth} from './firebase';

import { Navigate } from "react-router-dom";

import UserDashboard from './UserDashboard';

const AuthDetails = () => {
  const [authUser, setAuthUser] =useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
          setAuthUser(user)
        } else {
          setAuthUser(null)
        }
    });

    return () => {
      listen();
    }
  },[])
  const userSignOut = () => {
    signOut(auth).then().catch(error => console.log(error))
  }
  if (authUser) {
    <Navigate to="/userDashboard" replace={true} />
  } 
  // return (
    // <div>{ authUser ? <Navigate to="/userDashboard" replace={true} /> : <p>Signed-Out</p>}</div>
  // )
}

export default AuthDetails