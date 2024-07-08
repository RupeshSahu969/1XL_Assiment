import React from 'react'
import FrameComponent from "../../components/FrameComponent";
import Content from "../../components/Content";
import "./Homepage.css";

const Category1 = () => {
  return (
    <div className="homepage1">
      <h1 className="taking-care-for">Taking care for your pets !</h1>
      <FrameComponent />
      <Content />
      <div className="gallery">
        <img
          className="status-bar-iphone"
          alt=""
          src="/status-bar-iphone.svg"
        />
        <img
          className="unsplashbjaqpah6agq-icon"
          alt=""
          src="/unsplashbjaqpah6agq@2x.png"
        />
        <img
          className="unsplash5pvxkqt2s9k-icon"
          alt=""
          src="/unsplash5pvxkqt2s9k@2x.png"
        />
        <img
          className="unsplashmv9hjneuhr4-icon"
          alt=""
          src="/unsplashmv9hjneuhr4@2x.png"
        />
        <img
          className="unsplashzchj-2ljp00-icon"
          alt=""
          src="/unsplashzchj-2ljp00-1@2x.png"
        />
        <img
          className="gallery-divider-icon"
          loading="lazy"
          alt=""
          src="/vector-6@2x.png"
        />
        <img
          className="unsplasheoqnr8ikwfe-icon"
          alt=""
          src="/unsplasheoqnr8ikwfe@2x.png"
        />
        <img className="gallery-child" alt="" src="/group-17@2x.png" />
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
        <img
          className="gallery-item"
          loading="lazy"
          alt=""
          src="/arrow-1.svg"
        />
        <img className="group-icon" loading="lazy" alt="" src="/group@2x.png" />
        <img className="group-icon1" alt="" src="/group-1@2x.png" />
        <img className="paw-icon" loading="lazy" alt="" src="/paw@2x.png" />
        <img className="group-icon2" alt="" src="/group-2@2x.png" />
        <img className="group-icon3" alt="" src="/group-3@2x.png" />
        <img className="group-icon4" alt="" src="/group-4@2x.png" />
        <img className="paw-icon1" alt="" src="/paw-1@2x.png" />
      </div>
    </div>
  )
}

export default Category1
