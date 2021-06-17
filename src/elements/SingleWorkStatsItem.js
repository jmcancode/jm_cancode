import React from 'react'

function SingleWorkStatsItem({statsPercent, statsTitle, statsDesc}) {
    return(
        <>
            <div className="col-6 single-stat-box anim-bot">
                <h3>{statsPercent}<span>%</span></h3>
                <h6>{statsTitle}</h6> 
                <p>{statsDesc}</p>                  
            </div>
        </>
    )
}

export default SingleWorkStatsItem