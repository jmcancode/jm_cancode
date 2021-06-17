import React from 'react'
import {Link} from 'react-router-dom'
import Icofont from 'react-icofont'

import ServicesItem from '../elements/ServicesItem'

function Services(){

    const services = [
        {
            icon: "gears",
            title: "Performance",
            text: "Our goal is to improve the facilis est et expedita distinctio. Namerome libero tempore, cum soluta nobis est eligendi."
        },
        {
            icon: "mouse",
            title: "Usability",
            text: "We always try making facilis est et expedita quisquam venit libero tempore, cum soluta nobis est eligendi optio."
        },
        {
            icon: "search-map",
            title: "Search Engine Optimization",
            text: "Before asking why is facilis est et expedita sed duelit esteros libero tempore, cum soluta nobis est eligendi."
        },
        {
            icon: "laptop",
            title: "Usability",
            text: "We always try making facilis est et expedita quisquam venit libero tempore, cum soluta nobis est eligendi optio."
        },
        {
            icon: "keyboard",
            title: "Search Engine Optimization",
            text: "Before asking why is facilis est et expedita sed duelit esteros libero tempore, cum soluta nobis est eligendi."
        },
        {
            icon: "megaphone-alt",
            title: "Performance",
            text: "Our goal is to improve the facilis est et expedita distinctio. Namerome libero tempore, cum soluta nobis est eligendi."
        }
    ]

    const displayServices = services.map((item, index) => <ServicesItem key={index} icon={item.icon} title={item.title} text={item.text} />)

    return(
        <>
            <section id="sectionServices">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-6">
                            <h1 className="section-big-title anim-bot">Let's take your business <br /> to a whole new level.</h1>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-12 col-md-4 services-button">
                            <div className="cta-button anim-bot">
                                <Link to="/contact">Start a project <Icofont icon="thin-double-right" /></Link>
                            </div>
                        </div>
                        {displayServices}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services