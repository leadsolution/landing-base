import React from "react";
import Form from "./form";

export default class Hero extends React.PureComponent {
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
