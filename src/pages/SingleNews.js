import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {motion} from "framer-motion";

import {ThemeContext} from '../context/themeContext'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HomeCta from '../components/HomeCta'
import ArticlesDetails from '../components/ArticlesDetails'
import ArticlesNav from '../components/ArticlesNav'
import ToContact from '../components/ToContact'
import Footer from '../components/Footer'

import RecentPosts from '../elements/Widgets/RecentPosts'
import Categories from '../elements/Widgets/Categories'

import articlesData from '../data/NewsData'

function SingleNews(){

    const {afterLoading, afterLoadingImg, onScrollGreenAnim, onScrollBottomAnim} = useContext(ThemeContext)

    useEffect(() => {
        afterLoading()
    }, [])

    useEffect(() => {
        afterLoadingImg()
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", onScrollBottomAnim);
        return () => window.removeEventListener("scroll", onScrollBottomAnim);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", onScrollGreenAnim);
        return () => window.removeEventListener("scroll", onScrollGreenAnim);
    }, [])

    const {newsId} = useParams()
    const thisNews = articlesData.items.find(element => element.id === newsId)

    return(
        <div>
            <motion.div 
                initial={{y:0}}
                animate={{y:'-100%'}}
                exit={{y:0}}
                transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="page-trans">
            </motion.div>
            <Header />
            <Hero>
                <div className="row single-news-hero">
                    <div className="col-12">
                        <h1 className="hero-title">
                            {thisNews.title}
                        </h1>
                        <div className="article-meta hero-title">
                            <p>by Admin <span>|</span></p>
                            <p>0 comments <span>|</span></p>
                            <p>{thisNews.date}</p>
                        </div>
                        <ul className="hero-title">{thisNews.singlePage.categories.map((item, index) => <li key={index}><a href="/#">{item}</a></li>)}</ul>
                    </div>
                </div>  
            </Hero>
            <HomeCta img={thisNews.singlePage.bigImage}>
                <ArticlesDetails>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 single-news-left">
                        <h1 className="section-big-title anim-bot">{thisNews.singlePage.headline}</h1>
                        {thisNews.singlePage.textOne.map((item, i) => <p className="anim-bot" key={i}>{item}</p>)}
                        {thisNews.singlePage.blockquote.text ? 
                            <blockquote className="anim-bot">
                                <p>
                                    {thisNews.singlePage.blockquote.text}
                                </p>
                                <cite>{thisNews.singlePage.blockquote.author}</cite>
                            </blockquote>
                        : null }
                        {thisNews.singlePage.textTwo.map((item, i) => <p className="anim-bot" key={i}>{item}</p>)}
                        <p className="tags anim-bot">
                            {thisNews.singlePage.tags.map((item, i) => <span key={i}>{item}</span>)}
                        </p>
                    </div>

                    <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4 single-news-right sidebar">
                        <RecentPosts />
                        <Categories />
                    </div>

                    <div className="col-12 col-sm-4 col-md-4 col-lg-6"></div>
                </ArticlesDetails>
            </HomeCta>
            <ArticlesNav 
                backgroundPrev={thisNews.id > 1 ? articlesData.items.find(element => element.id === thisNews.id - 1).image : thisNews.image }
                titlePrev={thisNews.id > 1 ? articlesData.items.find(element => element.id === thisNews.id - 1).title : thisNews.title }
                linkPrev={thisNews.id > 1 ? thisNews.id - 1 : thisNews.id }
                noMorePrev={thisNews.id === 1 && 'done'}
                backgroundNext={thisNews.id < articlesData.items.length ? articlesData.items.find(element => element.id === thisNews.id + 1).image : thisNews.image }
                titleNext={thisNews.id < articlesData.items.length ? articlesData.items.find(element => element.id === thisNews.id + 1).title : thisNews.title }
                linkNext={thisNews.id < articlesData.items.length ? thisNews.id + 1 : thisNews.id } 
                noMoreNext={thisNews.id === articlesData.items.length && 'done'}
            />
            <ToContact />
            <Footer />
        </div>
    )

}

export default SingleNews