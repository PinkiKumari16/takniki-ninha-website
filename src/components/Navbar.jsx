import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { setAlertData } from "../redux/rootSlice";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Source Code", path: "/source-code" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleProfileClick = () => {
    if (user) {
      navigate(`/user-profile/${user.id}`);
    } else {
      dispatch(setAlertData({
        type: "error",
        message: "Please login first",
      }));
      navigate("/login");
    }
  };

  return (
    <nav className="bg-primary text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-4 h-16">
        <div className="text-2xl font-bold">Takniki Niga</div>

        {/* Toggle button (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuOpenIcon />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "activeLink" : "navLinks"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <Tooltip title="Login">
            <li className="px-2 rounded-xl pb-1 border-2 border-border-color">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "navLinks"
                }
              >
                <LoginIcon />
              </NavLink>
            </li>
          </Tooltip>

          <Tooltip title="Registration">
            <li className="px-2 rounded-xl pb-1 border-2 border-border-color">
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive ? "activeLink" : "navLinks"
                }
              >
                <AppRegistrationIcon />
              </NavLink>
            </li>
          </Tooltip>

          <Tooltip title="User Profile">
            <li onClick={handleProfileClick} className="cursor-pointer flex items-center gap-2">
              <AccountCircleIcon />
              {user ? <span>{user.name}</span> : <span>Profile</span>}
            </li>
          </Tooltip>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 right-0 bg-primary text-white z-50 p-6 transform transition-transform duration-300 ease-in-out text-sm ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "activeLink block" : "navLinks block"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "activeLink flex items-center gap-2" : "navLinks flex items-center gap-2"
                }
              >
                <LoginIcon /> Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/registration"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "activeLink flex items-center gap-2" : "navLinks flex items-center gap-2"
                }
              >
                <AppRegistrationIcon /> Register
              </NavLink>
            </li>

            <li onClick={() => { setMenuOpen(false); handleProfileClick(); }} className="cursor-pointer flex items-center gap-2">
              <AccountCircleIcon />
              {user ? <span>{user.name}</span> : <span>Profile</span>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
