import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styles from './Welcome.module.css';

const Welcome = () => {
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
      </div>
      <div className={styles.container}>
        <h2>Sub routes will rendered here:</h2>
        <Outlet />
      </div>
    </>
  );
};

export default Welcome;
