import React from 'react'

function Hero(props){
    return(
        <section id="heroSection" className={props.type}>
            <div className="container">
                {props.children} 
            </div>
        </section>
    )
}

export default Hero