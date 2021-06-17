import React from 'react'

function HomeCta(props){
    return(
        <section id="homeCtaSection" className="section">
            <div className="img-anim">
                <div className="img-anim-bg"></div>
                <img src={`/assets/images/${props.img}.jpg`} alt={props.img} />
            </div>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

export default HomeCta