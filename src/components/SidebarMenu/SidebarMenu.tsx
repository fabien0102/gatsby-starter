import * as React from "react";
import { MenuProps } from "../Menu";
import { Menu, Icon, Sidebar } from "semantic-ui-react";

interface SidebarMenuProps extends MenuProps {
  visible?: boolean;
}

export default ({ items, pathname, Link, visible }: SidebarMenuProps) => {
  return (
    <Sidebar as={Menu} animation="slide along" width="thin"
      visible={visible} icon="labeled" vertical inverted>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        return (
          <Menu.Item as={Link} to={item.path} active={active}>
            <Icon name={item.icon} />
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};
