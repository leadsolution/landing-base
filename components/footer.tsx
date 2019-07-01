import React, {MouseEvent} from "react";
import {focusFirst} from "../helpers";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#" onClick={(e: MouseEvent) => {
          e.preventDefault();
          focusFirst()
        }}>
          <img src="/static/img/logo.png" alt="Landing_base" className="img-fluid logo"/>
        </a>
      </div>
    </footer>
  );
}
