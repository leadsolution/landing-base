import React from "react";

export type KardProps = {
  img: {
    src: string
    alt: string
  }
  title: string
  body: string
}

export default class Kard extends React.PureComponent<KardProps> {
  render() {
    const { img, title, body } = this.props;

    return (
      <div className="kard">
        <div className="img">
          <img src={img.src} alt={img.alt} className="img-fluid rounded-circle" />
        </div>
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
    );
  }
}