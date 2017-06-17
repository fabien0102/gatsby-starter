import * as React from "react";
import { MenuProps, MenuItem } from "../Menu";
import { Menu, Icon, Sidebar } from "semantic-ui-react";

interface SidebarMenuProps extends MenuProps {
  visible?: boolean;
}

export default ({ items, pathname, Link, visible }: SidebarMenuProps) => {
  const isActive = (item: MenuItem) => (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
  const activeItem = items.find((item: MenuItem) => isActive(item)) || {} as MenuItem;
  return (
    <Sidebar as={Menu} animation="slide along" width="thin"
      visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>
      {items.map((item) => {
        const active = isActive(item);
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon} />
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};
