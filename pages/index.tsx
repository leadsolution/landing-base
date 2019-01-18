import React from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Hero from "../components/hero";
import Main from "../layouts/main";
import "../styles.scss";

export default class Index extends React.Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
    ReactPixel.pageView(window.location.pathname);
  }

  render() {
    return (
      <Main>
        <Hero />
      </Main>
    );
  }
}
