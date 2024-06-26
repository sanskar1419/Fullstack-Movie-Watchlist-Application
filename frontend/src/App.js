import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./page/Home/Home";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import WatchList from "./page/WatchList/WatchList";
import MyWatchList from "./page/MyWatchList/MyWatchList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/watchlist",
      element: <WatchList />,
    },
    {
      path: "/watchlist/:id",
      element: <MyWatchList />,
    },
  ]);
  return (
    <>
      {/* Passing all data router objects to this component to render the app and enable the rest of the data APIs */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
