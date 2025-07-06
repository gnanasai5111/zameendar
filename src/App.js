import React, { useEffect } from "react";
import AppRoute from "./Routes/AppRoute";
import "./app.less";
import Header from "./components/header/Header";
import { useLocation } from "react-router-dom";
import { authSuccess } from "./redux/authUser/authTypes";
import { useDispatch } from "react-redux";

function App() {
  const path = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null;

    console.log(userData, "app");

    if (userData?.token) {
      dispatch(authSuccess(userData));
    }
  }, [dispatch]);

  return (
    <div className="App">
      {path.pathname !== "/login" &&
        path.pathname !== "/register" &&
        path.pathname !== "/buy/:propertyid/gallery" && <Header />}
      <div
        className={
          path.pathname !== "/login" && path.pathname !== "/register"
            ? "content-wrapper-container auth"
            : "content-wrapper-container"
        }
      >
        <AppRoute />
      </div>
    </div>
  );
}

export default App;
