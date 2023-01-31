import React, { useState, useEffect, useReducer } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="homee">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-adv">
          <motion.div
            initial={{ left: mobile ? "148px" : "200px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span className="">The best Fitness club in the town</span>
        </div>
        {/* {Hero Heading} */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and built your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* {Figures} */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" prefix="+" />
            </span>
            <span>Expert Coach</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={500} delay="4" prefix="+" />
            </span>
            <span>Member Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="4" prefix="+" />{" "}
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* {End of left} */}

      <div className="right-h">
        {/* {Right Side start} */}
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" className="" />
          <span>Heart rate</span>
          <span>161 BPM</span>
        </div>
        <img className="hero_image" src={hero_image} alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "40rem" }}
          transition={transition}
          className="hero_image_back"
          src={hero_image_back}
          alt=""
        />
        <div className="calories">
          <img src={calories} alt="" className="" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kal</span>
          </div>
        </div>
      </div>
      {/* {Right Side End} */}
    </div>
  );
};

export default Hero;
