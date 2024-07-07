import GlocalContent from "./GlocalContent";
import PropTypes from "prop-types";
import "./GlocalContainer.css";

const GlocalContainer = ({ className = "" }) => {
  return (
    <div className={`glocal-container1 ${className}`}>
      <GlocalContent />
    </div>
  );
};

GlocalContainer.propTypes = {
  className: PropTypes.string,
};

export default GlocalContainer;
