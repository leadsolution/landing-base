import React, {useEffect, useState} from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Main from "../layouts/main";

export default function PrivacyPolicy() {
  const [privacyPolicy, setPrivacyPolicy] = useState();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    ReactPixel.pageView(window.location.pathname);

    fetch(
      "http://landings.leadsolution.com.br/privacy-policy/?name=Landing_base&domain=landingbase.com.br",
    )
      .then(response => response.text())
      .then(html => setPrivacyPolicy(html));
  }, []);

  return (
    <Main title="Política de privacidade">
      <div className="privacy-policy">
        <div className="container">
          <Placeholder html={privacyPolicy}/>
        </div>
      </div>
    </Main>
  );
}

function Placeholder(props: { html?: string }) {
  if (props.html !== undefined) {
    return <div dangerouslySetInnerHTML={{__html: props.html}}/>;
  }

  return (
    <div className="loading">
      <div className="distractor">
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}
