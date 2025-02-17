import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../../motions";

const Info = () => {
  return (
    <>
      <motion.div
      variants={fadeInOut("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      
      className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">3 Years Working</span>
        </div>
        <div className="about__box">
        <i class='bx bx-briefcase about__icon'></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">12+ Projects</span>
        </div>
        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
          <h3 className="about__title">Support</h3>
          <span className="about__subtitle">24/7</span>
        </div>
      </motion.div>
    </>
  );
};

export default Info;
