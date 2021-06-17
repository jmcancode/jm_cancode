import React from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const ThemeContext = React.createContext()

gsap.registerPlugin(ScrollTrigger);

function ThemeContextProvider(props) {

    const gsapLoading = () => {
        gsap.timeline()
            .from('.header-anim', {
                y: 15,
                opacity: 0,
                delay: 1,
                duration: .5,
                ease: "power3.inOut"
            })
            .from('.hero-title', {
                y: 25,
                opacity: 0,
                duration: .5,
                ease: "power3.inOut"
            })
            .from('.hero-cta', {
                y: 25,
                opacity: 0,
                duration: .5,
                ease: "power3.inOut"
            })
            .to('.img-anim-bg', {
                width: '0vw',
                duration: .5,
                ease: "power3.inOut"
            })
            .to('.img-anim img', {
                scale: 1,
                duration: 1,
                ease: "power3.inOut"
            });
    }

    const afterLoading = () => {
        const headerAnim = document.querySelector('.header-anim')
        const heroTitle = document.querySelectorAll('.hero-title')
        
        setTimeout(() => {
            headerAnim.classList.add('header-anim-on')
        }, 1000)

        setTimeout(() => {
            heroTitle.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('hero-title-on')
                }, 200 * index) 
            })
        }, 1500)
    }

    const afterLoadingImg = () => {
        const imgAnimBg = document.querySelector('.img-anim-bg')
        const imgAnimZoom = document.querySelector('.img-anim')

        setTimeout(() => {
            imgAnimBg.classList.add('img-anim-bg-on')
        }, 2500)

        setTimeout(() => {
            imgAnimZoom.classList.add('img-anim-on')
        }, 3000)
    }

    const scrollAnimations = () =>{
        gsap.utils.toArray('.anim-bot').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%'
                },
                y: 30,
                opacity: 0,
                duration: .5,
                ease: "power3.inOut"
            });
        });
        gsap.utils.toArray('.anim-bot-single-img').forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%'
                },
                y: 0,
                opacity: 1,
                delay: -1,
                duration: .5,
                ease: "power3.inOut"
            });
        });
        gsap.utils.toArray('.green-anim').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 75%'
                },
                width: 0,
                duration: .5,
                ease: "power3.inOut"
            });
        });
    }

    const onScrollBottomAnim = () => {
        const animBot = document.querySelectorAll('.anim-bot')

        animBot.forEach(item => {
            let itemPosition = item.getBoundingClientRect();

            if(itemPosition.top >= 0 && itemPosition.top <= window.innerHeight - 250) {
                item.classList.add('item-anim-bot')
            }
        })   
    }

    const onScrollGreenAnim = () => {
        const animBot = document.querySelectorAll('.green-anim')

        animBot.forEach(item => {
            let itemPosition = item.getBoundingClientRect();

            if(itemPosition.top >= 0 && itemPosition.top <= window.innerHeight - 250) {
                item.classList.add('item-anim-green')
            }
        })
    }

    return(
        <ThemeContext.Provider value={{afterLoading, afterLoadingImg, onScrollGreenAnim, onScrollBottomAnim}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}