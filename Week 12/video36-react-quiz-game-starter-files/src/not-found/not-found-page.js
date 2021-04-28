import React from "react";
import { useLocation } from "react-router";

function NotFoundPage() {
  const location = useLocation();
  return (
    <main>
      <h1>No Page Found</h1>
      <p>Oh no! Something has gone wrong. There is no page found at: {location.pathname}.</p>
    </main>
  );
}

export default NotFoundPage;
