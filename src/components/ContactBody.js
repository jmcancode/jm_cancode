import React from "react";

import Form from "../elements/Form/Form";

function ContactBody() {
  const date = new Date().getFullYear();

  const socialContact = [
    {
      label: "Instagram",
      url: "https://www.instagram.com",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      label: "Twitter",
      url: "https://www.twitter.com",
    },
  ];

  const displaySocialContact = socialContact.map((item, index) => (
    <li key={index}>
      <a href={item.url}>{item.label}</a>
    </li>
  ));

  return (
    <section id="sectionContact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 contact-left">
            <h2 className="big-title anim-bot">Say hello!</h2>
            <div className="row">
              <div className="col-12 col-sm-6 anim-bot">
                <div>
                  <h6>Careers</h6>
                  <h5>
                    <a href="mailto:narvaez.jonmichael@gmail.com">
                      narvaez.jonmichael@gmail.com
                    </a>
                  </h5>
                </div>
                <div>
                  <h6>Business inquiries</h6>
                  <h5>
                    <a href="mailto:narvaez.jonmichael@gmail.com">
                      narvaez.jonmichael@gmail.com
                    </a>
                  </h5>
                </div>
              </div>

              <div className="col-12 col-sm-6 anim-bot">
                <h6>
                  110 E. Houston St <br /> San Antonio, Texas <br /> 78205
                </h6>
                <h6 className="phone">
                  Phone <br />
                  +(210) 454 4340
                </h6>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 copyright anim-bot">
                <ul>{displaySocialContact}</ul>
                <p>© {date} JM CAN CODE. All rights reserved.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contact-right anim-bot">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBody;
