import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  const path = `.${props.path}`;

  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to='./' />
      }
    </Route>
  );
};

export default ProtectedRoute; 