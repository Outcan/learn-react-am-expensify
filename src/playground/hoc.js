// Higher Order Component : HOC
// A component (HOC) that renders another component
// HOC - reuse code, render hijacking, prop manipulation and abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {!props.isAuthenticated && <h1>Hey...</h1>}
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>You need to be authenticated to view this message</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details..." />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="Special authenticated message..." />,
  document.getElementById("app")
);
