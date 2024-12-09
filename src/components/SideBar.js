import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const togglesidebar = useSelector((store) => store.app.sideBarMenuOpen);

  if (!togglesidebar) return;
  return (
    <div className="m-2">
      <Link to="/">
        <h1 className="font-bold text-xl">Home</h1>
      </Link>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
      <h1 className="font-bold text-xl">Subscription</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default SideBar;
