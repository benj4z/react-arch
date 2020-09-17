import React from 'react';
import { Link, Outlet } from "react-router-dom";

const AuthPage = () => {
    return (
        <div>
            Auth Works
            <div>
                <Link to="forgotPass">Forgot pass?</Link>
            </div>

            <div>
                This should be displayed child routes:
                <Outlet />
            </div>
        </div>
    );
};

export default AuthPage;
