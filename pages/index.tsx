import React from "react";
import "./index.scss";
import Head from "next/head";
import Form from "../components/form";

interface Props {

}

interface State {
  count: number;
}

export default class Index extends React.Component<Props, State> {
  state = {
    count: 0
  }

  onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <Head></Head>
        <main role="main">
          <Form />
        </main>
      </div>
    );
  }
}