import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

Banner.propTypes = {
  bgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};
Banner.defaultProps = { bgUrl: "" };

function Banner(props) {
  const { bgUrl, title } = props;
  return (
    <section className="banner" style={{ backgroundImage: `url(${bgUrl})` }}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
}

export default Banner;
