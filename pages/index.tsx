import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Hero from "../components/hero";
import Kard, { KardProps } from "../components/kard";
import Splitter, { SplitterProps } from "../components/splitter";
import Main from "../layouts/main";
import "../styles.scss";

export default function Index() {
  const kards: KardProps[] = [
    {
      img: { src: "http://lorempixel.com/128/128/cats/", alt: "Example" },
      title: "Lorem ipsum",
      body:
        "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor."
    },
    {
      img: { src: "http://lorempixel.com/128/128/cats/", alt: "Example" },
      title: "Lorem ipsum",
      body:
        "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor."
    },
    {
      img: { src: "http://lorempixel.com/128/128/cats/", alt: "Example" },
      title: "Lorem ipsum",
      body:
        "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor."
    }
  ];

  const splitters: SplitterProps[] = [
    {
      fluid: false,
      sizes: [8, 4],
      img: { src: "http://lorempixel.com/1280/768/cats/", alt: "Example" },
      title: "Lorem impsum",
      body:
        "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor."
    },
    {
      fluid: false,
      sizes: [8, 4],
      img: { src: "http://lorempixel.com/1280/768/cats/", alt: "Example" },
      title: "Lorem impsum",
      body:
        "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor."
    },
    {
      fluid: true,
      sizes: [6, 6],
      img: { src: "http://lorempixel.com/1280/768/cats/", alt: "Example" },
      title: "Lorem impsum",
      body:
        "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor."
    },
    {
      fluid: true,
      sizes: [6, 6],
      img: { src: "http://lorempixel.com/1280/768/cats/", alt: "Example" },
      title: "Lorem impsum",
      body:
        "Quisque at risus non lacus commodo pretium ut eget eros. Nunc at sollicitudin nisl. In lobortis mollis tellus, ut ultrices sem gravida nec. Pellentesque tristique varius urna eu tempor."
    }
  ];

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    ReactPixel.pageView(window.location.pathname);
  });

  return (
    <Main>
      <Hero />

      <section className="kards">
        <div className="container">
          <div className="row">
            {kards.map(props => (
              <div className="col-lg-4 py-3">
                <Kard {...props} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="splitters">
        {splitters.map(props => (
          <Splitter {...props} />
        ))}
      </section>
    </Main>
  );
}
