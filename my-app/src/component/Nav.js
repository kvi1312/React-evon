import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "home",
  },
  {
    id: 2,
    to: "/blog",
    title: "blog",
  },
  {
    id: 3,
    to: "/profile",
    title: "profile",
  },
  {
    id: 4,
    to: "/contact",
    title: "contact us",
  },
];
const Nav = () => {
  return (
    <>
      <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
        {ListLink.map((link, id) => (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
