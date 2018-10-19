import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <p>404. Page not found.</p>
    <Link to="/">Back to site</Link>
  </div>
);

export default NotFound;
