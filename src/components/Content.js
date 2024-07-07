import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content ${className}`}>
      <div className="services-and-testimonials">
        <div className="services">
          <div className="profile">
            <img className="profile-child" alt="" src="/group-7-1.svg" />
            <b className="pet-grooming">Pet Grooming</b>
          </div>
        </div>
        <div className="services-double">
          <b className="pet-clinic2">Pet Clinic</b>
          <div className="clinic-daycare1">
            <img
              className="unsplashzchj-2ljp00-icon7"
              alt=""
              src="/unsplashzchj-2ljp00@2x.png"
            />
            <img className="clinic-daycare-child" alt="" src="/group-7-2.svg" />
            <img className="clinic-daycare-item" alt="" src="/group-7-2.svg" />
          </div>
          <b className="pet-daycare2">Pet Daycare</b>
        </div>
      </div>
      <div className="service">
        <div className="training">
          <div className="training-content1">
            <img
              className="unsplashqb7d1xw28co-icon2"
              alt=""
              src="/unsplashqb7d1xw28co@2x.png"
            />
            <img
              className="training-content-item"
              alt=""
              src="/group-7-2.svg"
            />
          </div>
          <b className="pet-training2">Pet Training</b>
        </div>
      </div>
      <div className="testimonials">
        <div className="scroll4">SCROLL</div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
