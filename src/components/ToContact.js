import React from "react";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

function ToContact() {
  return (
    <section id="toContactSection">
      <div className="green-bg green-anim"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 to-contact-cta">
            <h1 className="section-big-title text-white ">
              Let's build something <br /> amazing together!
            </h1>
            <div className="cta-wrapper text-white">
              <Link to="/contact">
                Start a project <Icofont icon="thin-double-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToContact;
