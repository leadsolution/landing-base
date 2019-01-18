import React from "react";
import Nav from "./nav";

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Nav />
        </div>
      </header>
    );
  }
}
