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
import ProfileBox from "./ProfileBox";
import Posts from "./miniComponents/Posts";
import Experience from "./miniComponents/Experience";
import Education from "./miniComponents/Education";
import Certifications from "./miniComponents/Certifications";
import Reccommendations from "./miniComponents/Reccommendations";
import Languages from "./miniComponents/Languages";
import Interests from "./miniComponents/Interests";
import Highlights from "./miniComponents/Highlights";


const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      {/* <Hero /> */}

{/* <ProfileBox /> */}

      {/* <Navbar /> */}
      <About />
      <Skills />
      <Portfolio />
      <Certifications />
      <MyApps />
      <Highlights />
      <Posts/>

      <Timeline />
      <Experience />
      <Education />
      <Reccommendations />
      <Languages />
      <Interests />

      {/* <Contact /> */}
    </article>
  );
};

export default Home;
