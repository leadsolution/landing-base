import React from "react";

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
      <a href="#" onClick={this.onClick.bind(this)}>{count}</a>
    );
  }
}