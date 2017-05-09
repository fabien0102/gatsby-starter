import * as Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "prismjs/themes/prism-okaidia.css";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
}

interface DefaultLayoutStates {
  sidebarVisible: boolean;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, DefaultLayoutStates> {
  state = { sidebarVisible: false };

  toggleSidebar() {
    console.log("toggleSidebar");
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    // Inject `toggleSidebar` function into children
    const children = React.Children.map(this.props.children, (child: React.ReactElement<any>) =>
      React.cloneElement(child, { toggleSidebar: this.toggleSidebar.bind(this) }),
    );

    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={this.state.sidebarVisible} />
        <Sidebar.Pusher>
          {/* Header */}
          {isHome ? "" : <HeaderMenu
            Link={Link} pathname={pathname} items={menuItems}
            toggleSidebar={this.toggleSidebar.bind(this)}
          />}

          {/* Render children pages */}
          {children}

          {/* Footer */}
          <Segment inverted vertical>
            <Container textAlign="center">
              <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
