import React from "react";
import Form from "./form";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-7">
          </div>

          <div className="col-lg-6 col-xl-5">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
