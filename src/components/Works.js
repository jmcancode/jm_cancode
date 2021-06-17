import React, { useState, useEffect } from "react";

import WorkItem from "../elements/WorkItem";

import works from "../data/WorksData.json";

function Works() {
  const [filter, setFilter] = useState("all works");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([works.items]);
  }, []);

  useEffect(() => {
    setProjects([]);
    let worksUpdated = [];
    for (let i = 0; i < works.items.length; i++) {
      if (
        filter !== "all works" &&
        !works.items[i].category.includes("portfolio-hidden")
      ) {
        works.items[i].category = `${works.items[i].category} portfolio-hidden`;
      }
      if (filter === "all works") {
        let x = works.items[i].category.split(" ");
        works.items[i].category = x[0];
      }
      if (works.items[i].category.includes(filter)) {
        works.items[i].category = filter;
      }
      worksUpdated.push(works.items[i]);
    }
    setProjects(worksUpdated);
  }, [filter]);

  const worksFilters = ["all works", "frontend", "fullstack"];
  const displayWorks = projects.map((item, i) => (
    <WorkItem
      key={i}
      title={item.name}
      category={item.category}
      image={item.image}
      id={item.id}
    />
  ));

  return (
    <section id="portfolioSection" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 portfolio-main-title anim-bot">
            <h1 className="section-big-title">
              My selected work. <br /> Always a work in progress.
            </h1>
          </div>
          <div className="col-12 col-lg-6 portfolio-filters anim-bot">
            <nav className="nav portfolio-nav anim-bot">
              {worksFilters.map((item, i) => (
                <a
                  key={i}
                  className={`nav-item ${filter === item ? "active" : null}`}
                  onClick={() => setFilter(item)}
                  href="/#"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="row works-wrapper">{displayWorks}</div>
      </div>
    </section>
  );
}

export default Works;
