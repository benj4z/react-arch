import React from 'react';
import {renderRoutes} from 'react-router-config';
import { routes } from "./router";

function App() {
  return (
    <div className="App">
        {renderRoutes(routes)}
    </div>
  );
}

export default App;
