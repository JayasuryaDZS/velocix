import React from "react";
import ReactDOM from "react-dom/client";
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
import { Dashboard } from "./screens/dashboard";
import Document from "./screens/document/Document";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route path="/" index={true} element={<HomeScreen />}></Route>
      </Route>
      <Route
        path="/:product/:productId/:release/:releaseId/"
        index={true}
        element={<Dashboard />}
      ></Route>
      <Route
        path="/:product/:productId/:release/:releaseId/document"
        index={true}
        element={<Document />}
      ></Route>
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
