import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Icofont from "react-icofont";

import { ThemeContext } from "../context/themeContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Page404() {
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
      <Hero>
        <div className="row">
          <div className="col-12 centered-hero">
            <h1 className="hero-title">Ooops... It seems like you're lost.</h1>
            <div className="hero-button hero-title">
              <a href="#a">
                <Link to="/" style={{ border: "none" }}>
                  Go home <Icofont icon="thin-double-right" />
                </Link>
              </a>
            </div>
          </div>
        </div>
      </Hero>
      <Footer />
    </>
  );
}

export default Page404;
