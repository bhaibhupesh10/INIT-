import React from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import About from "./miniComponents/About";
import { ThemeProvider } from "components/theme-provider"
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";
import Navbar from "scenes/navbar";

const ProfileBox = () => {
  const containerStyle = {
    width: '60%',             // 60% of the window width
    margin: '0 auto',         // Center the container
    padding: '20px',          // Add some padding for content
    backgroundColor: '#f0f0f0', // Light gray background
    border: '1px solid #ccc', // Light border
    boxSizing: 'border-box',  // Include padding in width/height
    overflow: 'hidden',       // Ensure content doesn't overflow
  };

  return (
    <div style={containerStyle}>
      <About />
    </div>
  );
};

export default ProfileBox;
