import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icofont from "react-icofont";

import { ThemeContext } from "../context/themeContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeCta from "../components/HomeCta";
import Team from "../components/Team";
import Services from "../components/Services";
import ToContact from "../components/ToContact";
import Footer from "../components/Footer";

function About() {
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
              I design and engineer <br /> beautiful & clean
              applications.
            </h1>
            <p className="hero-title">
              I develop web and mobile applications for web designers,
              marketeers, and start-ups. <br /> My software is written using
              React for web and React Native for mobile applications.
            </p>
            <div className="hero-title hero-button">
              <Link to="/">
                My work <Icofont icon="thin-double-right" />
              </Link>
            </div>
          </div>
        </div>
      </Hero>
      <HomeCta img={windowWidth < 500 ? "mobile-about-hero" : "about-hero"}>
        <Services />
      </HomeCta>
      <Team />
      <ToContact />
      <Footer />
    </>
  );
}

export default About;
