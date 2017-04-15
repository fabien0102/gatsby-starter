import * as React from "react";

export default class DefaultLayout extends React.Component<HTMLDivElement, void> {
  render() {
    return (
      <div id="layout">
        {/* Render children pages */}
        {this.props.children}
      </div>
    );
  }
}
