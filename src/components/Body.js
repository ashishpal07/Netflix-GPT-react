import React from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const Body = () => {

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};
