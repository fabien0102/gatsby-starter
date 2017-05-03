import * as Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu";
import { Segment, Icon, Container } from "semantic-ui-react";
import "../css/styles.css";
import "prismjs/themes/prism-okaidia.css";

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
      {isHome ? "" : <HeaderMenu pathname={pathname} />}

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
