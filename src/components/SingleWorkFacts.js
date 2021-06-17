import React from 'react'

function SingleWorkFacts({client, date, timeframe, website}){
    return(
        <>
            <section id="singleFactsSection">
                <div className="container-fluid-small">
                    <div className="row">
                        <div className="col-3 anim-bot">
                            <h6>Client</h6>
                            <p>{client}</p>
                        </div>
                        <div className="col-3 anim-bot">
                            <h6>Completed</h6>
                            <p>{date}</p>
                        </div>
                        <div className="col-3 anim-bot">
                            <h6>Timeframe</h6>
                            <p>{timeframe}</p>
                        </div>
                        <div className="col-3 anim-bot">
                            <h6>Website</h6>
                            <p>{website}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleWorkFacts