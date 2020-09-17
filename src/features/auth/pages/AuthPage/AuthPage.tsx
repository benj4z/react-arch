import * as React from 'react';
import { Link } from "react-router-dom";

const AuthPage = () => {
    return (
        <div>
            Auth Page
            <Link to="/auth/forgotPass">Forgot password</Link>
        </div>
    );
};

export default AuthPage;
