import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`frame-wrapper ${className}`} style={frameDivStyle}>
      <div className="frame-div">
        <img className="frame-child5" alt="" src="/group-7-1.svg" />
        <b className="pet-grooming1">Pet Grooming</b>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent1;
