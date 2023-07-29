/* eslint-disable react/no-unescaped-entities */
import React from "react";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css';
import Typed from 'typed.js';

function Home() {
  return (
    <section className="home grid">
      <img src={profile} className="home__img" alt="" data-aos="zoom-in" data-aos-duration="1000"/>

      <div className="home__content" data-aos="fade-left" data-aos-duration="1000">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Jabir Ahmad.</span> Web Designer
          </h1>

          <p className="home__description">
            I'm a Bangladeshi web designer & front-end developer focused on crafting clean &
            user-friendly experiences, I am passionate about building excellent software that
            improves the lives of those around me.
          </p>

          <Link to="/about" className="button">
             More About Me <span className="button__icon">
              <FaArrowRight />
             </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;
