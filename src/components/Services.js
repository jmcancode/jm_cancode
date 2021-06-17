import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";

import ServicesItem from "../elements/ServicesItem";

function Services() {
  const services = [
    {
      icon: "gears",
      title: "Performance",
      text: "My goal is to create an application that can function at the highest capacity on all platforms. All of my applications operate at 60 FPS",
    },
    {
      icon: "mouse",
      title: "Usability",
      text: "I always keep users in mind. I prefer a minimal but effect design approach, making the user experience hyper focused on whats important to them.",
    },
    {
      icon: "search-map",
      title: "Search Engine Optimization",
      text: "Create-react-app has out of the box SEO optimizations but I go a step further and comply with Googles regulations.",
    },
    {
      icon: "laptop",
      title: "Responsive",
      text: "The best features (in my opinion) of a web application is the responsive frontend framework. The ability to create an application that can operation on all operating systems and maintain design integrity is game changing.",
    },
    {
      icon: "layers",
      title: "Progressive Web Applications (PWA)",
      text: "The mobile killer? Some would say PWA's are the future of web and mobile development. Fortune 500's have started making the move to converting their current web sites to PWA because of its impressive features. ",
    },
    {
      icon: "iphone",
      title: "Mobile",
      text: "Most native applications have to be built by large teams that focus on one operating system and can be very costly to develop. I prefer to use React Native for mobile development to cut cost and head count. ",
    },
  ];

  const displayServices = services.map((item, index) => (
    <ServicesItem
      key={index}
      icon={item.icon}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <>
      <section id="sectionServices">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="section-big-title anim-bot">
                Let's take yMy business <br /> to a whole new level.
              </h1>
            </div>
            <div className="col-2"></div>
            <div className="col-12 col-md-4 services-button">
              <div className="cta-button anim-bot">
                <Link to="/contact">
                  Start a project <Icofont icon="thin-double-right" />
                </Link>
              </div>
            </div>
            {displayServices}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
