import React from "react";
import { Link } from "react-router-dom";

import MainMenu from "../elements/MainMenu";
// import SocialMenu from "../elements/SocialMenu";

function Header() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row header-anim">
            <div className="col-12 col-md-6 site-logo">
              <Link to="/">
                <span style={{ color: "#c60000" }}>JM</span> CAN CODE.
              </Link>
            </div>
            <div className="col-12 col-md-6 main-menu">
              <MainMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
