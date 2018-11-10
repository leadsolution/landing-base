import React from "react";
import Head from "next/head";
import Form from "../components/form";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

import "./index.scss";

export default class Index extends React.Component {
  componentDidMount() {
    ReactGA.initialize("");
    ReactGA.pageview(window.location.pathname);

    ReactPixel.init("");
    ReactPixel.pageView();
  }

  render() {
    return (
      <div>
        <Head></Head>
        <main role="main">
          <Form />
        </main>
      </div>
    );
  }
}