import React from 'react'

function SingleWorkGallery({images}){
    console.log(images)
    return(
        <section id="singleGallerySection">
            <div className="container">
                <div className="row">
                    {images.map((item, key) => <div key={key} className="col-12 anim-bot"><img src={`assets/images/${item}`} alt={item} /></div>)}
                </div>
            </div>
        </section>
    )
}

export default SingleWorkGallery