import * as Link from "gatsby-link";
import * as React from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";
import "../css/styles.css";

export default class DefaultLayout extends React.Component<HTMLDivElement, void> {
  render() {
    return (
      <div id="layout">
        {/* TODO Add fixed/slidebar menu */}
        {/*<div>
          <Link to="/" activeStyle={{color: "red"}} onlyActiveOnIndex={true}>
            Home
          </Link>
          |
          <Link to="/about/" activeStyle={{color: "red"}}>
            About
          </Link>
        </div>*/}

        {/* Render children pages */}
        {this.props.children}
      </div>
    );
  }
}
