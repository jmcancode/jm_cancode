import React from "react";
import { Link } from "react-router-dom";

function ArticlesNav({
  backgroundPrev,
  titlePrev,
  linkPrev,
  noMorePrev,
  backgroundNext,
  titleNext,
  linkNext,
  noMoreNext,
}) {
  return (
    <>
      <section id="sectionArticlesNav">
        <div className="row">
          <Link
            to={noMorePrev === "done" ? "/" : `single-news-${linkPrev}`}
            onClick={(event) => {
              noMorePrev === "done" && event.preventDefault();
            }}
            className={
              noMorePrev === "done"
                ? `col-12 col-md-6 news-prev news-nav-box news-last anim-bot`
                : `col-12 col-md-6 news-prev news-nav-box anim-bot`
            }
            style={{ backgroundImage: `url(/assets/images/${backgroundPrev})` }}
          >
            <div className="news-nav-overlay"></div>
            {noMorePrev === "done" ? (
              <div>
                <h1 className="big-title next-grey">No more articles</h1>
                <h3>This is the first article.</h3>
              </div>
            ) : (
              <div>
                <h1 className="big-title">Previous article</h1>
                <h3>{titlePrev}</h3>
              </div>
            )}
          </Link>
          <Link
            to={noMoreNext === "done" ? "/" : `single-news-${linkNext}`}
            onClick={(event) => {
              noMoreNext === "done" && event.preventDefault();
            }}
            className={
              noMoreNext === "done"
                ? `col-12 col-md-6 news-next news-nav-box news-last anim-bot`
                : `col-12 col-md-6 news-next news-nav-box anim-bot`
            }
            style={{ backgroundImage: `url(/assets/images/${backgroundNext})` }}
          >
            <div className="news-nav-overlay"></div>
            {noMoreNext === "done" ? (
              <div>
                <h1 className="big-title next-grey">No more articles</h1>
                <h3>This is the last article.</h3>
              </div>
            ) : (
              <div>
                <h1 className="big-title">Next article</h1>
                <h3>{titleNext}</h3>
              </div>
            )}
          </Link>
        </div>
      </section>
    </>
  );
}

export default ArticlesNav;
