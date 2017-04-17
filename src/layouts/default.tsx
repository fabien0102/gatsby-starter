import * as Link from "gatsby-link";
import * as React from "react";

export default class DefaultLayout extends React.Component<HTMLDivElement, void> {
  render() {
    return (
      <div id="layout">
        <div>
          <Link to="/" activeStyle={{color: "red"}} onlyActiveOnIndex={true}>
            Home
          </Link>
          |
          <Link to="/about/" activeStyle={{color: "red"}}>
            About
          </Link>
        </div>
        {/* Render children pages */}
        {this.props.children}
      </div>
    );
  }
}
