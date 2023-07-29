/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaPhoneSquareAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

function Contact() {
 

  return (
    <section className="contact section">
      <h2 className="section__title" data-aos="fade-down" data-aos-duration="1000">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data" data-aos="fade-right" data-aos-duration="1000">
          <h3 className="contact__title">Dont't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative
            ideas or opportunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">www.roman1249@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+88 01627159355</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/md.jabirahmad.1612/" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com/Jabir7005" className="contact__social-link">
              <FaTwitter />
            </a>

            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>

            <a href="https://instagram.com" className="contact__social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        <form
          className="contact__form"
          data-aos="fade-left"
          data-aos-duration="1000"
          method="POST"
          action="https://getform.io/f/94a40969-bc13-43e7-ae8d-8830e62901a5"

        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
                name="name"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Subject"
                name="subject"
              />
            </div>

          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              className="form__control textarea"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
