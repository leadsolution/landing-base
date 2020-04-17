import React, {useEffect} from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Hero from "../components/hero";
import Main from "../layouts/main";
import {NextPage} from "next";

const Index: NextPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    ReactPixel.pageView(window.location.pathname);
  }, []);

  return (
    <Main title="Landing_base">
      <Hero/>
    </Main>
  );
}

export default Index;
