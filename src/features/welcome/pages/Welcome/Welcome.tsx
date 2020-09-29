import React from 'react';
import {useDispatch} from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { login } from "../../../../store/Auth";
import styles from './Welcome.module.css';

const Welcome = () => {
  const dispatch = useDispatch();
  
  function logIn() {
    dispatch(login());
  }
  
  return (
    <>
      <div className={styles.hero}>
        <h1>React app desing architecture</h1>
        <h2>By Jakuba Eugene</h2>
      </div>
      <div className={styles.container}>
        <h2>Router</h2>
        <p>I used React Router v6 because of his benefits:</p>
        <Link to="subRoute">This is a link with param to="subRoute"</Link>
        <br />
        <br />
        <div>
          <Link to="protectedRoute">This is link to protected Route</Link>
          <br />
          <button type="button" onClick={logIn}>Fake login</button>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Sub routes will rendered here:</h2>
        <Outlet />
      </div>
    </>
  );
};

export default Welcome;
