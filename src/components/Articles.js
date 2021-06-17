import React from "react";

import ArticlesItem from "../elements/ArticlesItem";

import articles from "../data/NewsData.json";

function Articles() {
  return (
    <>
      <section id="sectionArticles">
        <div className="container">
          <div className="row hero-title">
            {articles.items.map((item, index) => (
              <ArticlesItem
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
