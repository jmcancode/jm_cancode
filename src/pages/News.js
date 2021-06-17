import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../context/themeContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Articles from "../components/Articles";
import ToContact from "../components/ToContact";
import Footer from "../components/Footer";

function News() {
  const { afterLoading, onScrollGreenAnim, onScrollBottomAnim } =
    useContext(ThemeContext);

  useEffect(() => {
    afterLoading();
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
      <Hero type="short">
        <div className="row">
          <div className="col-12 centered-hero">
            <h1 className="hero-title">
              Insights, thoughts & <br /> announcements.
            </h1>
            <p className="hero-title">
              I share tips, tutorials, and lessons from recent experiments +
              projects on the web and in mobile using React + React Native.{" "}
              <br />
            </p>
          </div>
        </div>
      </Hero>
      <Articles />
      <ToContact />
      <Footer />
    </>
  );
}

export default News;
