import React from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Hero from "../components/hero";
import Kard, { KardProps } from "../components/kard";
import Main from "../layouts/main";
import "../styles.scss";

export default class Index extends React.Component {
  kards: KardProps[] = [
    { img: { src: "http://lorempixel.com/128/128/cats/", alt: "Example" }, title: "Lorem ipsum", body: "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor." },
    { img: { src: "http://lorempixel.com/128/128/cats/", alt: "Example" }, title: "Lorem ipsum", body: "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor." },
    { img: { src: "http://lorempixel.com/128/128/cats/", alt: "Example" }, title: "Lorem ipsum", body: "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor." },
  ]

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
    ReactPixel.pageView(window.location.pathname);
  }

  render() {
    return (
      <Main>
        <Hero />

        <section className="kards">
          <div className="container">
            <div className="row">
              {this.kards.map(props =>
                <div className="col-md">
                  <Kard {...props} />
                </div>
              )}
            </div>
          </div>
        </section>
      </Main>
    );
  }
}
