import NextApp from "next/app";
import React from "react";
import "../styles/styles.scss";

export default class CustomApp extends NextApp {
  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />
  }
}
