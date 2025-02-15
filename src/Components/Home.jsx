/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me.png";

const imageAltText = "Pankaj Singh Kushwaha Profile photo";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative" }}>
      <img className="background" src={image} alt="" style={{ width: "700px", height:"700px", position: "relative",zIndex:0, borderRadius: "50%",marginTop:"100px" , marginLeft:"5px",marginRight:"5px" }} />
      <div style={{ position: "absolute", top: "5rem", left: "1rem", width: "28rem", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "1rem", borderRadius: "10px" }}>
        <h1 style={{ color: "#4A90E2", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>{name}</h1>
        <h2 style={{ color: "#FFFFFF", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)", fontStyle: "italic" }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} style={{ height: "4rem", width: "4rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Pankaj Singh Kushwaha",
  title: "Web developer and Content creator",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
