import React from 'react'

function RecentPosts(){

    return(
        <>
            <div className="widget anim-bot">
                <h5 className="sub-title">Recent Posts</h5>

                <div className="recent-post">
                    <h4>Easy recipe to make a delicious vanilla ice cream.</h4>
                    <p className="recent-date">9 May, 2021</p>
                </div>
                <div className="recent-post">
                    <h4>Biggest health benefits of lemon water with mint.</h4>
                    <p className="recent-date">7 May, 2021</p>
                </div>
                <div className="recent-post">
                    <h4>25 healthiest fruits you should eat everyday for a week.</h4>
                    <p className="recent-date">6 May, 2021</p>
                </div>
                <div className="recent-post">
                    <h4>How to build a morning skincare routine in minutes.</h4>
                    <p className="recent-date">29 April, 2021</p>
                </div>

            </div>
        </>
    )

}

export default RecentPosts