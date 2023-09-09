import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./index.css";

import "./styles/global.module.scss";

//pages:
import App from "./App.jsx";
import HomeScreen from "./screens/HomeScreen";
import ErrorPage from "./screens/errorPage.jsx";
// import { CdnScreen } from "./screens/CDN";
import GetStarted from "./screens/GetStarted";
import General from "./screens/General";
import CdnLayout from "./screens/CdnLayout";
import { Dashboard } from "./screens/dashboard/";
import CurrentScreen from "./screens/newScreen/Current";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomeScreen />}></Route>
      </Route>
      <Route path="/cdn" element={<CdnLayout />}>
        {/* <Route path="/cdn/" element={<CdnScreen />}></Route> */}
        <Route path="/cdn/getStarted" element={<GetStarted />} />
        <Route path="/cdn/getStarted/general" element={<General />}></Route>
        {/* </Route> */}
      </Route>

      <Route path="/" index={true} element={<HomeScreen />}></Route>
      <Route path="/dash" element={<CurrentScreen />}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
