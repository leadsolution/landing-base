import Form from "./form";
import Headline from "./headline";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-xl-7">
            <Headline />
          </div>

          <div className="col-lg-6 col-xl-5">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
