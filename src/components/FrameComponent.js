import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`services-grid-wrapper ${className}`}>
      <header className="services-grid">
        <div className="service-item">
          <h2 className="get-various-services-container2">
            <p className="get-various-services2">
              Get various services personalized
            </p>
            <p className="for-your-pets2">for your pets like</p>
          </h2>
        </div>
        <div className="service-item1">
          <div className="service-item2">
            <img
              className="service-item-child"
              loading="lazy"
              alt=""
              src="/group-7.svg"
            />
            <div className="glocal-wrapper">
              <a className="glocal">
                <span>G</span>
                <span className="local">local</span>
              </a>
            </div>
          </div>
          <div className="service-item3">
            <div className="navigation">
              <a className="home">Home</a>
              <a className="categories">Categories</a>
              <a className="about-us">{`About Us `}</a>
              <a className="products">{`Products `}</a>
              <a className="pet-care">Pet Care</a>
              <a className="contact">Contact</a>
            </div>
          </div>
          <div className="auth-buttons">
            <div className="auth-buttons-wrapper">
              <div className="btn-signin">
                <div className="btn-signin-child" />
                <a className="sign-in">Sign In</a>
              </div>
              <div className="btn-register">
                <div className="btn-register-child" />
                <a className="register">Register</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
