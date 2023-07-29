import React, { useEffect, useState } from "react";
const Error = () => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const error = localStorage.getItem("error");
    setError(error);
  }, []);
  if (!error) {
    return null;
  }
  return (
    <div className="error-page">
      <h1>404 Error</h1>
      <p>{error}</p>
      <a href="/">Return to the homepage</a>
    </div>
  );
};
export default Error;