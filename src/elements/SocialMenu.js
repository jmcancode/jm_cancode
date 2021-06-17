import React from 'react'
import Icofont from 'react-icofont'

const mainMenuLinks = [
    {
        label: 'facebook',
        url: '/'
    },
    {
        label: 'instagram',
        url: '/'
    },
    {
        label: 'twitter',
        url: '/'
    }
]

const displayLinks = mainMenuLinks.map((item, index) => <li key={index}><a href={item.url}><Icofont icon={item.label}/></a></li>)

function SocialMenu(){
    return(
        <>
            <ul>
                {displayLinks}
            </ul>
        </>
    )
}

export default SocialMenu