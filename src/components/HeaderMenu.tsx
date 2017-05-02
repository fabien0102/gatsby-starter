import * as Link from "gatsby-link";
import * as React from "react";
import { Container, Label, Menu, Icon } from "semantic-ui-react";

interface HeaderMenuProps extends React.HTMLProps<HTMLDivElement> {
  /* The location pathname of current page */
  pathname: string;
}

export default (props: HeaderMenuProps) => {
  const isHome = props.pathname === "/";
  const isAbout = props.pathname === "/about/";
  const isBlog = props.pathname === "/blog/";

  return (
    <Container>
      <Menu size="large" pointing secondary inverted={isHome}>
        <Menu.Item><Icon name="spy" size="big"/></Menu.Item>
        <Menu.Item as={Link} name="Home" to="/" active={isHome} />
        <Menu.Item as={Link} name="About" to="/about/" active={isAbout} />
        <Menu.Item as={Link} name="Blog" to="/blog/" active={isBlog} />
      </Menu>
    </Container>
  );
};
