import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./pages/game";
import Frontpage from "./pages/frontpage";
import Settings from "./pages/settings";
import About from "./pages/about";
import Wordgametimer from "./components/wordgame";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontpage />,
  },
  {
    path: "Game",
    element: <Game />,
  },
  {
    path: "Settings",
    element: <Settings />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "App",
    element: <Wordgametimer />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);