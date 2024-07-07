import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GlocalContent.css";

const GlocalContent = ({ className = "", authTop, authPosition }) => {
  const glocalContentStyle = useMemo(() => {
    return {
      top: authTop,
      position: authPosition,
    };
  }, [authTop, authPosition]);

  return (
    <header
      className={`glocal-content ${className}`}
      style={glocalContentStyle}
    >
      <div className="glocal-info">
        <img className="glocal-info-child" alt="" src="/group-7.svg" />
        <div className="glocal-container">
          <a className="glocal1">
            <span>G</span>
            <span className="local1">local</span>
          </a>
        </div>
      </div>
      <div className="navigation-wrapper">
        <div className="navigation1">
          <a className="home1">Home</a>
          <a className="categories1">Categories</a>
          <a className="about-us1">{`About Us `}</a>
          <a className="products1">{`Products `}</a>
          <a className="pet-care1">Pet Care</a>
          <a className="contact1">Contact</a>
        </div>
      </div>
      <div className="auth-wrapper">
        <div className="auth">
          <div className="btn-signin1">
            <div className="btn-signin-item" />
            <a className="sign-in1">Sign In</a>
          </div>
          <div className="btn-register1">
            <div className="btn-register-item" />
            <a className="register1">Register</a>
          </div>
        </div>
      </div>
    </header>
  );
};

GlocalContent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  authTop: PropTypes.any,
  authPosition: PropTypes.any,
};

export default GlocalContent;
