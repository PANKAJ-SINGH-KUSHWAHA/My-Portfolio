/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useEffect } from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import image from "./images/me.jpg";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Pankaj Singh Kushwaha",
  title: "Full Stack Web Developer and Machine Learning Enthusiast",
  email: "kushwahapankaj793@gmail.com",
  gitHub: "https://github.com/PANKAJ-SINGH-KUSHWAHA",
  instagram: "https://www.instagram.com/01pankaj_singh_/?hl=en",
  linkedIn: "https://www.linkedin.com/in/pankaj-singh-kushwaha/",
  // medium: "",
  // twitter: "microsoft",
  // youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  useEffect(() => {
    document.title = "Pankaj Singh Kushwaha Portfolio";
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = image;
    document.head.appendChild(link);
    
  });

  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
