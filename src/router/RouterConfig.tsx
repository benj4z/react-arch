import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { routes } from "./routes";

function RouteWithSubRoutes(route: any) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

export const RouterConfig = () => (
    <Switch>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </Switch>
)
