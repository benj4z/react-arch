import * as React from 'react';
import { useFormik } from "formik";
import styles from './LoginForm.module.css'

// But for complex forms you must use useFormikContext if you want use Formik, Field, Form and so on

const LoginFormComponent = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })
  
  const {values, handleChange, handleSubmit} = formik
  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <span>Login</span>
            <br />
            <input type="text" name="login" onChange={handleChange} value={values.login}/>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>Password</span>
            <br />
            <input type="password" name="password" onChange={handleChange} value={values.password}/>
          </label>
        </fieldset>
        <button>Sign in</button>
      </form>
    </div>
  );
};


export const LoginForm = React.memo(LoginFormComponent);
