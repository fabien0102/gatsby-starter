import * as Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { Segment, Icon, Container } from "semantic-ui-react";
import "../css/styles.css";
import "prismjs/themes/prism-okaidia.css";

export const menuItems = [
  {name: "Home", path: "/", exact: true},
  {name: "About", path: "/about/", exact: true},
  {name: "Blog", path: "/blog/", exact: false},
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
}

export default (props: DefaultLayoutProps) => {
  const {pathname} = props.location;
  const isHome = pathname === "/";

  return (
    <div id="layout">
      {/* TODO Add fixed/slidebar menu */}
      <Icon name="sidebar" />
      {isHome ? "" : <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />}

      {/* Render children pages */}
      {props.children}

      {/* Footer */}
      <Segment inverted vertical>
        <Container textAlign="center">
          <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
        </Container>
      </Segment>
    </div>
  );
};
