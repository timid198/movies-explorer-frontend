import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {

  const directTo = `.${props.path}`
  console.log(props.loggedIn, directTo);
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to={props.path} />
      }
    </Route>
  );
};

export default ProtectedRoute; 