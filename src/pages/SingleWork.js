import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Icofont from "react-icofont";
import { motion } from "framer-motion";

import { ThemeContext } from "../context/themeContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SingleWorkGallery from "../components/SingleWorkGallery";
import HomeCta from "../components/HomeCta";
import SingleWorkStats from "../components/SingleWorkStats";
import SingleWorkRelated from "../components/SingleWorkRelated";
import Footer from "../components/Footer";

import works from "../data/WorksData.json";

function SingleWork() {
  const {
    afterLoading,
    afterLoadingImg,
    onScrollGreenAnim,
    onScrollBottomAnim,
  } = useContext(ThemeContext);

  useEffect(() => {
    afterLoading();
  }, []);

  useEffect(() => {
    afterLoadingImg();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScrollBottomAnim);
    return () => window.removeEventListener("scroll", onScrollBottomAnim);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScrollGreenAnim);
    return () => window.removeEventListener("scroll", onScrollGreenAnim);
  }, []);

  const { workId } = useParams();
  const thisWork = works.items.find((element) => element.id === workId);
  const updatedWorks = works.items.filter((element) => element !== thisWork);
  const relatedWorks = updatedWorks.filter(
    (element) => element.category === thisWork.category
  );

  return (
    <div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="page-trans"
      ></motion.div>
      <Header />
      <Hero>
        <div className="row single-work-hero">
          <div className="col-12 col-md-12 col-lg-7 col-xl-8">
            <h1 className="hero-title">{thisWork.name}</h1>
            {thisWork.singlePage.headerInfo.project.map((item, index) => (
              <p className="hero-title" key={index}>
                {item}
              </p>
            ))}
          </div>
          <div className="col-1"></div>
          <div className="col-12 col-md-12 col-lg-4 col-xl-3 single-work-fact hero-title">
            <div>
              <h6>Role</h6>
              <ul>
                {thisWork.singlePage.headerInfo.services.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 single-hero-button">
            <div className="hero-button hero-title">
              <Link to="/contact">
                Start a project <Icofont icon="thin-double-right" />
              </Link>
            </div>
          </div>
        </div>
      </Hero>
      <HomeCta img={thisWork.singlePage.bigImage}>
        <div className="row single-work-cta">
          <div className="col-12 col-md-4">
            <h1 className="section-big-title anim-bot">
              {thisWork.singlePage.headline}
            </h1>
          </div>
          <div className="col-1"></div>
          <div className="col-12 col-md-7">
            <div className="anim-bot">
              {thisWork.singlePage.description.map((item, key) => (
                <p key={key}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </HomeCta>
      <SingleWorkGallery images={thisWork.singlePage.gallery} />
      <SingleWorkStats
        text={thisWork.singlePage.improvementText}
        stats={thisWork.singlePage.improvements}
      />
      <SingleWorkRelated works={relatedWorks} />
      <Footer />
    </div>
  );
}

export default SingleWork;
