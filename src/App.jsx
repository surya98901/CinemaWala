import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./assets/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "./assets/userSlice";

const App = () => {
  console.log("useEffect ran");
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);

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
