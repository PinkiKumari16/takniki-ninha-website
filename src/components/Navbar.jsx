import React from "react";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { Tooltip } from "@mui/material";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-[15px_30px] bg-primary text-white">
        <div className="text-2xl font-bold">Takniki Niga</div>
        <ul className="list-none flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLinks"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/source-code"
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLinks"
              }
            >
              Source Code
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLinks"
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLinks"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLinks"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLinks"
              }
            >
              Contact Us
            </NavLink>
          </li>
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
        </ul>
      </nav>
    </>
  );
};
