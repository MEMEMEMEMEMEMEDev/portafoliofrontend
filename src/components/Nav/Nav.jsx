import React from "react";
import "./Nav.scss";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Nav() {
  return (
    <div className="nav">
      <NavDesktop />
      <NavMobile />
    </div>
  );
}
