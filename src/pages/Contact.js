import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../context/themeContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeCta from "../components/HomeCta";
import ContactBody from "../components/ContactBody";

function Contact() {
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
      <Hero type="short">
        <div className="row">
          <div className="col-12 centered-hero">
            <h1 className="hero-title">
              I'd love to work together <br /> Don't hesitate, drop me a line.
            </h1>
            <p className="hero-title">
              Let's talk about your awesome project idea, I'll give you my
              expertise <br />
              and pricing and in the end we'll create an amazing product.
            </p>
          </div>
        </div>
      </Hero>
      <HomeCta
        img={windowWidth < 500 ? "mobile-contact-hero" : "contact-hero"}
      />
      <ContactBody />
    </>
  );
}

export default Contact;
