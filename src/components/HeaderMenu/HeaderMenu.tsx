import * as React from "react";
import { Container, Label, Menu, Icon } from "semantic-ui-react";
import { MenuProps } from "../Menu";

interface HeaderMenuProps extends MenuProps {
  inverted?: boolean;
}

export default ({ items, pathname, Link, inverted }: HeaderMenuProps) => {
  return (
    <Container>
      <Menu size="large" pointing secondary inverted={inverted}>
        <Menu.Item><Icon name="spy" size="big"/></Menu.Item>
        {items.map((item) => {
          const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
          return <Menu.Item as={Link} name={item.name} to={item.path} active={active} />;
        })}
      </Menu>
    </Container>
  );
};
