import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icofont from "react-icofont";

import { ThemeContext } from "../context/themeContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeCta from "../components/HomeCta";
import Works from "../components/Works";
import ToContact from "../components/ToContact";
import Footer from "../components/Footer";

function Home() {
  const windowWidth = window.innerWidth;
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

  console.log(windowWidth);

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        exit={{ y: 0 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="page-trans"
      ></motion.div>
      <Header />
      <Hero>
        <div className="row">
          <div className="col-12">
            <h1 className="hero-title">
              I write solutions for your problems using Javascript. <br />
            </h1>
            <p className="hero-title">
              Hello there! I'm JM, freelance full-stack developer living and
              working in San Antonio, Texas <br /> Lets get together and talk
              about your next web or mobile project.
            </p>
            <div className="hero-button hero-title">
              <Link to="/about">
                Learn more <Icofont icon="thin-double-right" />
              </Link>
            </div>
          </div>
        </div>
      </Hero>
      <HomeCta img={windowWidth < 500 ? "mobile-home-cta2" : "home-cta2"}>
        <div className="row">
          <div className="col-12 col-md-5">
            <h1 className="section-big-title anim-bot">
              In the digital age <br /> Your brand is always in beta.
            </h1>
            <ul className="anim-bot">
              <li>Discover</li>
              <li>Design</li>
              <li>Develop</li>
              <li>Test</li>
              <li>Deploy</li>
            </ul>
          </div>
          <div className="col-1"></div>
          <div className="col-12 col-md-6">
            <div className="anim-bot">
              <p>
                It’s a constant work in progress. I believe in the agile
                approach to software development, creating a flexible and
                healthy learning enjoinment for all parties involved in creating
                your applications.
              </p>
              <p>
                Rather than trying to get things perfect the first time, I focus
                on properly testing the user experience as your application
                grows. Every application has its own requirements and timeline,
                therefor it is difficult to give pricing.
              </p>
            </div>
          </div>
        </div>
      </HomeCta>
      <Works />
      <ToContact />
      <Footer />
    </>
  );
}

export default Home;
