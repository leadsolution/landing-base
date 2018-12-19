import React from "react";
import "./main.scss";

export default class Main extends React.Component {
  render() {
    return (
      <main role="main">
        <div className="container">
          <div className="row">
            <div className="col">
              Content
            </div>
          </div>
        </div>
      </main>
    );
  }
}
