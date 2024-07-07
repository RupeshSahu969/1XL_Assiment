import FrameComponent2 from "../../components/FrameComponent2";
import GlocalContent from "../../components/GlocalContent";
import "./Homepage4.css";

const Homepage4 = () => {
  return (
    <div className="homepage4">
      <FrameComponent2 />
      <div className="navigation-parent">
        <GlocalContent authTop="0" authPosition="sticky" />
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="get-various-services-personali-wrapper">
              <h1 className="get-various-services-container1">
                <p className="get-various-services1">
                  Get various services personalized
                </p>
                <p className="for-your-pets1">for your pets like</p>
              </h1>
            </div>
            <div className="scroll3">SCROLL</div>
          </div>
        </div>
      </div>
      <div className="image-carousel">
        <img
          className="image-carousel-child"
          alt=""
          src="/status-bar-iphone.svg"
        />
        <img className="image-carousel-item" alt="" src="/group-17@2x.png" />
        <img
          className="unsplashbjaqpah6agq-icon4"
          alt=""
          src="/unsplashbjaqpah6agq@2x.png"
        />
        <img
          className="unsplash5pvxkqt2s9k-icon4"
          alt=""
          src="/unsplash5pvxkqt2s9k@2x.png"
        />
        <img
          className="unsplashmv9hjneuhr4-icon4"
          alt=""
          src="/unsplashmv9hjneuhr4@2x.png"
        />
        <img
          className="unsplashzchj-2ljp00-icon6"
          alt=""
          src="/unsplashzchj-2ljp00@2x.png"
        />
        <img
          className="unsplasheoqnr8ikwfe-icon4"
          alt=""
          src="/unsplasheoqnr8ikwfe@2x.png"
        />
        <img className="vector-icon3" loading="lazy" alt="" src="/vector.svg" />
        <img
          className="image-carousel-inner"
          loading="lazy"
          alt=""
          src="/arrow-1.svg"
        />
        <img
          className="group-icon19"
          loading="lazy"
          alt=""
          src="/group3@2x.png"
        />
        <img className="group-icon20" alt="" src="/group-13@2x.png" />
        <img className="paw-icon5" alt="" src="/paw@2x.png" />
        <img className="paw-icon6" alt="" src="/paw-12@2x.png" />
        <img className="decorative-element-icon" alt="" src="/vector-11.svg" />
        <img
          className="image-carousel-child1"
          alt=""
          src="/group-7-52@2x.png"
        />
      </div>
    </div>
  );
};

export default Homepage4;
