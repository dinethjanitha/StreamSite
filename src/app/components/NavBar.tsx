import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Stream Site</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>{"Live".toUpperCase()}</a>
          </li>
          <li>
            <a>SCHEDULE</a>
          </li>
          <li>
            <a>ON DEMAND</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
