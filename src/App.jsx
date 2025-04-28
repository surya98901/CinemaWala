import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-red-900  to-gray-900">
      <RouterProvider router={router}>

        <Outlet />
     
      </RouterProvider>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default App;
