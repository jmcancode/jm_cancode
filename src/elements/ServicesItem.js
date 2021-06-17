import React from 'react'
import Icofont from 'react-icofont'

function ServicesItem({icon, title, text}){
    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 service-box anim-bot">
            <Icofont icon={icon} />
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    )
}

export default ServicesItem