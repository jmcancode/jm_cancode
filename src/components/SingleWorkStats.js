import React from "react";

import SingleWorkStatsItem from "../elements/SingleWorkStatsItem";

function SingleWorkDescription({ text, stats }) {
  return (
    <>
      <section id="singleStatsSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-5 single-stats-title">
              <h1 className="section-big-title anim-bot">
                How I added value this brand. <br /> See the numbers.
              </h1>
              {text.map((item, index) => (
                <p className="anim-bot" key={index}>
                  {item}
                </p>
              ))}
            </div>
            <div className="col-1"></div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="row">
                {stats.map((item, index) => (
                  <SingleWorkStatsItem
                    key={index}
                    statsPercent={item.improvementPercent}
                    statsTitle={item.improvementTitle}
                    statsDesc={item.improvementDescription}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleWorkDescription;
