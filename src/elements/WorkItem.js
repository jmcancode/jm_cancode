import React from 'react'
import {Link} from 'react-router-dom'

function WorkItem({id, image, title, category}){
    return(
        <div className={`col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 portfolio-box ${category}`}>
            <div className="anim-bot">
                <div className="cancel-anchor"></div>
                <Link to={`/works-${id}`}>
                    <div className="portfolio-image">
                        <div className="work-img-wrapper">
                            <img src={`assets/images/${image}`} alt="" />
                        </div>
                        <div className="portfolio-text">
                            <h3>{title}</h3>
                            <h6>{category}</h6>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WorkItem