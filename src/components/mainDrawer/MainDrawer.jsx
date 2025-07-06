import React, { useContext, useEffect, useState } from "react";
import "./main-drawer.less";
import { FaClipboardList, FaUserAstronaut } from "react-icons/fa";
import { GiFamilyHouse, GiHelp, GiHouse } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillInfoCircle,
  AiFillSetting,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { MdLogout, MdOutlineFavoriteBorder } from "react-icons/md";
import { DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function MainDrawer({ onClose, redirectHandler, logoutHandler, isDrawerOpen }) {
  const [toggleIcon, setToggleIcon] = useState();
  const showSubMenu = (value) => {
    if (value === toggleIcon) {
      setToggleIcon("");
    } else {
      setToggleIcon(value);
    }
  };

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const redirectUser = () => {
    if (user?.token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const handleBackButton = (event) => {
      if (isDrawerOpen) {
        onClose();
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isDrawerOpen, onClose]);

  return (
    <div className="drawer-content">
      <div className="top-header">
        <div className="user-icon">
          <div className="icon-text-box">
            <div className="img-container">
              <FaUserAstronaut />
            </div>
            <div className="text-container">
              <h6>Welcome</h6>
              <p>{user.token ? user.firstName : "Guest Profile"}</p>
            </div>
          </div>
          <div className="cancel-text" onClick={onClose}>
            x
          </div>
        </div>
        <button className="signin-btn" onClick={() => redirectUser()}>
          {user.token ? "Profile" : "Login/Register"}
        </button>
      </div>
      <div className="content">
        <div
          className="post-property"
          onClick={() => {
            redirectHandler("/add-property");
            onClose();
          }}
        >
          <div className="left">
            <h6>Post Property</h6>
            <p>Group,Single,Commercial,PG/CO-Living</p>
          </div>
          <img
            src="/images/house-icon.jpg"
            alt="house"
            className="img-style"
            loading="lazy"
          />
        </div>

        <div className="nav-items">
          <div className="item">
            <div
              className="left-side"
              onClick={() => {
                redirectHandler("/my-listings");
                onClose();
              }}
            >
              <FaClipboardList />
              Listings
            </div>
          </div>
          <div className="item">
            <div
              className="left-side"
              onClick={() => {
                navigate("/about");
                onClose();
              }}
            >
              <AiFillInfoCircle />
              About
            </div>
          </div>

          <div className="item">
            <div className="left-side">
              <GiHelp />
              Help
            </div>
          </div>
          <div
            className="item"
            onClick={() => {
              redirectHandler("/favorites");
              onClose();
            }}
          >
            <div className="left-side">
              <MdOutlineFavoriteBorder />
              Favorites
            </div>
          </div>
          <div className="item" onClick={() => showSubMenu("Services")}>
            <div className="left-side">
              <AiFillSetting />
              Services
            </div>
            {toggleIcon === "Services" ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          {toggleIcon === "Services" && (
            <div className="sub-items">
              <Link to="/buy" onClick={onClose}>
                Buy
              </Link>
              <Link to="/slider" onClick={onClose}>
                Sell
              </Link>
              <Link to="/slider" onClick={onClose}>
                Rent
              </Link>
            </div>
          )}
        </div>
      </div>
      {user?.token && (
        <div className="logout-handler" onClick={logoutHandler}>
          <h6>Logout</h6>
          <MdLogout />
        </div>
      )}
    </div>
  );
}

export default MainDrawer;
