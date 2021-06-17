import React from "react";

function ArticlessDetails(props) {
  return (
    <section id="singleNews" className="section">
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
}

export default ArticlessDetails;
