import React from 'react'
import {Link} from 'react-router-dom'

function ArticlesItem({id, image, date, title}){
    return(
        <>
            <div className={`col-12 col-md-6 col-lg-4 articles-box ${id > 3 ? "anim-bot" : ""}`}>
                <Link to={`/single-news-${id}`}>
                    <div className="article-image">
                        <div className="article-img-wrapper">
                            <img src={`assets/images/${image}`} alt="" />
                        </div>
                        <div className="articles-text">
                            <h6>{date}</h6>
                            <h5>{title}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ArticlesItem