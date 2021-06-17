import React from 'react'
import Icofont from 'react-icofont';

function TeamItem({image, job, name, social}){
    return(
        <div className={`col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 team-box anim-bot`}>
            <img src={`assets/images/${image}`} alt="" />
            <h6 className="sub-title">{job}</h6>
            <h5>{name}</h5>
            <div className="team-box-social">
                {social.map((item, index) => <a key={index} href={item.url}><span><Icofont icon={item.name}/></span></a>)}
            </div>
        </div>
    )
}

export default TeamItem