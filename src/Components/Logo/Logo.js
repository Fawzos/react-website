import React from "react";
import PropTypes from "prop-types";
import logoSrc from "../../assets/logo_dark.svg";
import { LogoImage } from "../StyledComponents/LogoImage";
import { useNavigate } from "react-router-dom";

const Logo = ({ src, alt, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <LogoImage
      sx={{ cursor: "pointer" }}
      src={src || logoSrc}
      alt={alt}
      {...props}
      onClick={handleClick}
    />
  );
};
Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Logo.defaultProps = {
  alt: "Logo",
};

export default Logo;
