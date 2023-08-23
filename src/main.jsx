import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";

import "./styles/global.module.scss";

//pages:
import App from "./App.jsx";
import HomeScreen from "./screens/HomeScreen";
import ErrorPage from "./screens/errorPage.jsx";
import { Dashboard } from "./screens/dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" index={true} element={<HomeScreen />}></Route>
      <Route path="/details/:id" index={true} element={<Dashboard />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
