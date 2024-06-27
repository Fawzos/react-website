import React from "react";
import PropTypes from "prop-types";
import logoSrc from "../../assets/logo_dark.svg";
import { LogoImage } from "../StyledComponents/LogoImage";

const Logo = ({ src, alt, ...props }) => {
  return <LogoImage src={src || logoSrc} alt={alt} {...props} />;
};
Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Logo.defaultProps = {
  alt: "Logo",
};

export default Logo;
