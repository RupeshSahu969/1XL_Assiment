import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`homepage4-inner ${className}`}>
      <div className="taking-care-for-your-pets-parent">
        <h1 className="taking-care-for4">Taking care for your pets !</h1>
        <div className="services-grid1">
          <div className="service-icons">
            <div className="frame-parent1">
              <img
                className="frame-child6"
                loading="lazy"
                alt=""
                src="/group-7-1.svg"
              />
              <b className="pet-grooming2">Pet Grooming</b>
            </div>
            <div className="frame-parent2">
              <img className="frame-child7" alt="" src="/group-7-2.svg" />
              <div className="service-names">
                <b className="pet-clinic3">Pet Clinic</b>
              </div>
            </div>
            <div className="frame-parent3">
              <img className="frame-child8" alt="" src="/group-7-2.svg" />
              <div className="pet-daycare-wrapper">
                <b className="pet-daycare3">Pet Daycare</b>
              </div>
            </div>
            <div className="frame-parent4">
              <img className="frame-child9" alt="" src="/group-7-2.svg" />
              <div className="pet-training-wrapper">
                <b className="pet-training3">Pet Training</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
