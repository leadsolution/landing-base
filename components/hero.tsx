import React from "react";
import Form from "./form";
import "./hero.scss";

export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <Form />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
