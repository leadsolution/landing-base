import React from "react";

export type SplitterProps = {
  fluid: boolean;
  sizes: [number, number];
  img: { src: string; alt: string };
  title: string;
  body: string;
};

export default function Splitter({ fluid, sizes, img, title, body }: SplitterProps) {
  return (
    <article className="splitter">
      <div className={`container${fluid ? "-fluid" : ""}`}>
        <div className="row">
          <div className={`col-lg-${sizes[0]}`} style={{ padding: 0 }}>
            <img src={img.src} alt={img.alt} className="img-fluid" />
          </div>

          <div className={`col-lg-${sizes[1]}`} style={{ padding: 0 }}>
            <div className="content">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
