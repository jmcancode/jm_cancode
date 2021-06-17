import React from "react";
import { NavLink } from "react-router-dom";

const mainMenuLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "News",
    url: "/news",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const displayLinks = mainMenuLinks.map((item, index) => (
  <li key={index}>
    <NavLink exact={true} to={item.url} activeClassName="active">
      {item.label}
    </NavLink>
  </li>
));

function MainMenu() {
  return (
    <>
      <ul>{displayLinks}</ul>
    </>
  );
}

export default MainMenu;
