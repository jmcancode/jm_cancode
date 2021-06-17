import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  const socialFooter = [
    {
      label: "Instagram",
      url: "https://www.instagram.com/jm_cancode",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/jmcancode",
    },
    {
      label: "Twitter",
      url: "https://www.twitter.com/jm_can_code",
    },
  ];

  const displaySocialFooter = socialFooter.map((item, index) => (
    <li key={index}>
      <a href={item.url}>{item.label}</a>
    </li>
  ));

  return (
    <section id="sectionFooter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-2 col-xl-3 footer-logo">
            <h3><span style={{color: "#c60000"}}>JM</span> CAN CODE.</h3>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xl-3 footer-contact-box">
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
          <div className="col-12 col-md-3 col-lg-3 col-xl-3 footer-contact-box footer-address-box">
            <h6>
              100 E Houston <br /> San Antonio, Texas <br /> 78205
            </h6>
            <h6 className="phone">
              Phone <br />
              +(210) 454 4340
            </h6>
          </div>
          <div className="col-12 col-md-5 col-lg-4 col-xl-3 social-footer-menu">
            <ul>{displaySocialFooter}</ul>
            <p>© {date} JM CAN CODE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
