import FrameComponent from "../../components/FrameComponent";
import Content from "../../components/Content";
import "./Homepage1.css";

const Homepage1 = () => {
  return (
    <div className="homepage2">
      <h1 className="taking-care-for1">Taking care for your pets !</h1>
      <FrameComponent />
      <Content />
      <div className="image-gallery">
        <img
          className="gallery-divider-icon1"
          alt=""
          src="/gallery-divider.svg"
        />
        <img className="image-gallery-child" alt="" src="/group-7-5.svg" />
        <img
          className="gallery-divider-icon2"
          alt=""
          src="/status-bar-iphone.svg"
        />
        <img
          className="unsplashbjaqpah6agq-icon1"
          alt=""
          src="/unsplashbjaqpah6agq@2x.png"
        />
        <img
          className="unsplash5pvxkqt2s9k-icon1"
          loading="lazy"
          alt=""
          src="/unsplash5pvxkqt2s9k@2x.png"
        />
        <img
          className="unsplashmv9hjneuhr4-icon1"
          alt=""
          src="/unsplashmv9hjneuhr4@2x.png"
        />
        <img
          className="unsplashzchj-2ljp00-icon1"
          alt=""
          src="/unsplashzchj-2ljp00-1@2x.png"
        />
        <img
          className="gallery-divider-icon3"
          loading="lazy"
          alt=""
          src="/vector-6@2x.png"
        />
        <img
          className="unsplasheoqnr8ikwfe-icon1"
          alt=""
          src="/unsplasheoqnr8ikwfe@2x.png"
        />
        <img className="image-gallery-item" alt="" src="/group-17@2x.png" />
        <img className="gallery-divider-icon4" alt="" src="/vector.svg" />
        <img
          className="image-gallery-inner"
          loading="lazy"
          alt=""
          src="/arrow-1.svg"
        />
        <img className="food-icon" loading="lazy" alt="" src="/food@2x.png" />
        <img
          className="group-icon5"
          loading="lazy"
          alt=""
          src="/group1@2x.png"
        />
        <img className="group-icon6" alt="" src="/group-11@2x.png" />
        <img className="group-icon7" alt="" src="/group-21@2x.png" />
        <img className="group-icon8" alt="" src="/group-31@2x.png" />
        <img className="group-icon9" alt="" src="/group-4@2x.png" />
      </div>
    </div>
  );
};

export default Homepage1;
