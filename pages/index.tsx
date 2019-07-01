import React, {useEffect} from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Hero from "../components/hero";
import Main from "../layouts/main";
import "../styles.scss";

export default function Index() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    ReactPixel.pageView(window.location.pathname);
  }, []);

  return (
    <Main title="Landing_base">
      <Hero />
      <div>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
        lalralra<br/>
      </div>
    </Main>
  );
}
