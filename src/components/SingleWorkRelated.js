import React from "react";

import RelatedWorkItem from "../elements/RelatedWorkItem";

function SingleWorkRelated(props) {
  return (
    <>
      <section id="singleRelatedSection">
        <div className="green-bg green-anim"></div>
        <div className="container">
          <h1 className="section-big-title anim-bot">More related work.</h1>
          <div className="row">
            {props.works.map((item, key) => (
              <RelatedWorkItem
                key={key}
                id={item.id}
                title={item.name}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleWorkRelated;
