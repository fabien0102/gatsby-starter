import * as React from "react";
import { Button, Header, Image, Icon, Sidebar, Segment, Menu } from "semantic-ui-react";

export interface SidebarMenuItem {
  name: string;
  icon: string;
  path: string;
}

export interface SidebarLeftOverlayProps {
  items: SidebarMenuItem[];
}

export interface SidebarLeftOverlayStates {
  visible: boolean;
}

export default class SidebarLeftOverlay extends React.Component<SidebarLeftOverlayProps, SidebarLeftOverlayStates> {
  state = { visible: false };

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  renderItem(item: SidebarMenuItem) {
    return (
      <Menu.Item name={item.name.toLocaleLowerCase()}>
        <Icon name={item.icon} />
        {item.name}
      </Menu.Item>
    );
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation="overlay" width="thin" visible={visible} icon="labeled" vertical inverted>
            {this.props.items.map(this.renderItem)}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
