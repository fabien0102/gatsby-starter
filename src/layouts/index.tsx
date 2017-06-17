import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
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
  children: any;
}

<<<<<<< 5442af3de0ecf751c05d56050ed25ee9114c6b7e
export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
=======
interface DefaultLayoutStates {
  sidebarVisible: boolean;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, DefaultLayoutStates> {
  state = { sidebarVisible: false };

  toggleSidebar() {
    console.log("toggle sidebar");
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

>>>>>>> Use null instead of empty string
  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

<<<<<<< 5442af3de0ecf751c05d56050ed25ee9114c6b7e
=======
    // Inject `toggleSidebar` function into children
    const children = React.Children.map(this.props.children(), (child: React.ReactElement<any>) =>
      React.cloneElement(child, { toggleSidebar: this.toggleSidebar.bind(this) }),
    );

    console.log(children);
>>>>>>> Use null instead of empty string
    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />
        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : <HeaderMenu
            Link={Link} pathname={pathname} items={menuItems}
          />}

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>
            {this.props.children()}
          </div>

          {/* Footer */}
          <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Container textAlign="center">
              <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
