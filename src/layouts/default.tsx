import * as React from "react";

export default (props: React.HTMLProps<HTMLDivElement>) =>
  <div id="layout">
    {/* Render children pages */}
    {this.props.children}
  </div>;
