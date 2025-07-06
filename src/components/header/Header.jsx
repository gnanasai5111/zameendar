import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.less";
import { CiGlobe } from "react-icons/ci";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineMenu,
  AiOutlinePlus,
} from "react-icons/ai";
import { Drawer, Tag, message } from "antd";
import { MdLogout, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import MainDrawer from "../mainDrawer/MainDrawer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authUser/authActions";
import { getLocation } from "../addProperty/Location/GetLocationInfo";

function Header() {
  const [toggleIcon, setToggleIcon] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dispatch = useDispatch();

  const loginReducer = useSelector((state) => state.login);

  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const data = await getLocation();
        console.log(data);
        setLocation(data?.city);
      } catch (error) {
        setLocation("Hyderabad");
        // message.error(error.message);
      }
    };
    fetchUserLocation();
  }, []);

  const handleHover = (value) => {
    if (value === toggleIcon) {
      setToggleIcon("");
    } else {
      setToggleIcon(value);
    }
  };

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const redirectUserHandler = () => {
    if (!user?.token) {
      navigate("/login");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userData");
    navigate("/login");
    dispatch(logout());
  };

  const redirectHandler = (path) => {
    if (user?.token) {
      navigate(path);
    } else {
      navigate("/login");
    }
  };
  return (
    <header class="main-header">
      <div className="wrapper">
        <div class="logo-holder">
          <Link to="/">
            <img
              src="/images/logo1.png"
              alt="logo"
              className="logo"
              // loading="lazy"
              class="custom-logo lazy"
            />
          </Link>
        </div>
        <div className="right-wrapper">
          <nav className="main-navigation">
            <ul className="menu">
              <li onClick={() => navigate("/my-listings")}>
                <div className="main-link"> Listings</div>
              </li>
              <li>
                <div className="main-link" onClick={() => navigate("/about")}>
                  About
                </div>
              </li>
              <li>
                <div className="main-link">Help</div>
              </li>
              <li className="item">
                <div
                  className="main-link"
                  onMouseEnter={() => handleHover("Services")}
                  onMouseLeave={() => handleHover("")}
                >
                  Services{" "}
                  {toggleIcon !== "Services" ? (
                    <AiOutlineCaretDown />
                  ) : (
                    <AiOutlineCaretUp />
                  )}
                </div>

                <ul className="sub-menu">
                  <li>
                    <Link to={`/buy/group-appartments/${location}`}>
                      Group Appartments
                    </Link>
                  </li>
                  <li>
                    <Link to={`/buy/group-villas/${location}`}>
                      Group Villas
                    </Link>
                  </li>
                  <li>
                    <Link to={`/buy/group-plots/${location}`}>Group Plots</Link>
                  </li>
                  <li>
                    <Link to={`/buy/flats/${location}`}>Flats</Link>
                  </li>
                  <li>
                    <Link to={`/buy/building/${location}`}>Building</Link>
                  </li>
                  <li>
                    <Link to={`/buy/villas/${location}`}>Villa</Link>
                  </li>
                  <li>
                    <Link to={`/buy/plots/${location}`}>Open Plot</Link>
                  </li>
                  <li>
                    <Link to={`/rent/rent-properties/${location}`}>Rent</Link>
                  </li>
                  <li>
                    <Link to={`/pg/pg-properties/${location}`}>Pg/Co-Living</Link>
                  </li>
                  <li>
                    <Link to={`/commercial/commercial-properties/${location}`}>Commercial</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div
            className="sign-in-wrapper buttons-grp"
            onClick={() => redirectUserHandler()}
          >
            <FaUserAstronaut />{" "}
            {user?.token ? (
              <span>{user?.firstName}</span>
            ) : (
              <span>Sign In</span>
            )}
            {user?.token && (
              <div className="logout-container">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <div className="logout" onClick={() => logoutHandler()}>
                  Logout
                  <MdLogout />
                </div>
              </div>
            )}
          </div>
          <div
            className="wishlist-wrapper buttons-grp"
            onClick={() => redirectHandler("/favorites")}
          >
            <MdOutlineFavoriteBorder />
            <Tag>2</Tag>
          </div>
          <div className="location-wrapper buttons-grp">
            <CiGlobe />
            <AiOutlineCaretDown />
          </div>
          <div className="buttons-grp">
            <div
              className="add-property-wrapper"
              onClick={() => redirectHandler("/add-property")}
            >
              <AiOutlinePlus />
              Add Property
            </div>
          </div>
          <div
            className="buttons-grp drawer"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <div className="drawer-btn">
              <AiOutlineMenu />
            </div>
          </div>
        </div>
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={isDrawerOpen}
        className="main-drawer"
        key="left"
      >
        <MainDrawer
          onClose={onClose}
          redirectHandler={redirectHandler}
          logoutHandler={logoutHandler}
          isDrawerOpen={isDrawerOpen}
        />
      </Drawer>
    </header>
  );
}

export default Header;
