import * as React from 'react';
import { Link } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";

const AuthPage = ({ route }: { route: RouteConfig }) => {
    return (
        <div>
            Auth Page
            <Link to="/auth/forgotPass">Forgot password</Link>

            <div>
                {renderRoutes(route.routes)}
            </div>
        </div>
    );
};

export default AuthPage;
