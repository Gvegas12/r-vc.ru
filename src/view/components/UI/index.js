import React from "react";
import UIButton from "./UIButton";

export class UI extends React.Component {
  static Button = UIButton;

  render() {
    return <>{this.props.children}</>;
  }
}
