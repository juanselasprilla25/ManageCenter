import React from "react";
import { useRouteError } from "../../node_modules/react-router-dom/dist/index";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, algo salio mal</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
