import * as React from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuItemProps,
  Segment,
  Container,
  Grid,
  Header,
  Label,
  Icon,
} from "semantic-ui-react";
import { version } from "../../package.json";

export default class IndexPage extends React.Component<HTMLDivElement, void> {
  activeItem: string = "home";

  handleItemClick(event: React.MouseEvent<HTMLAnchorElement>, { name }: MenuItemProps) {
    console.log(name);
  }

  render() {
    return (
      <div>
        {/* Master head */}
        <Segment vertical inverted textAlign="center" className="masthead">
          <Container>
            <Menu large inverted pointing secondary>
              <Menu.Item name="Home" active={true} />
              <Menu.Item name="About" onClick={this.handleItemClick} />
              <Menu.Item name="Blog" onClick={this.handleItemClick} />
            </Menu>
          </Container>
          <Container text>
            <Label color="black">{version}</Label>
            <Header inverted as="h1">Gatsby 1.0 - Starter kit</Header>
            <Header inverted as="h2">Typescript - Jest - Semantic UI</Header>
            <Button primary size="huge">Get started!</Button>
          </Container>
        </Segment>

        {/* About this starter */}
        <Segment vertical className="stripe">
          <Grid stackable verticalAlign="middle" className="container">
            <Grid.Row>
              <Grid.Column width="8">
                <Header>Lorem ipsum</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
                <Header>Dolor sit amet</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
              </Grid.Column>
              <Grid.Column width="6" floated="right">
                {/* TODO replace with a pretty GIF */}
                <Header>Lorem ipsum</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
                <Header>Dolor sit amet</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro laudantium ad, quae, perspiciatis ipsa distinctio.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {/* Key features */}
        <Segment vertical className="stripe alternate feature">
          <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
            <Grid.Row>
              <Grid.Column>
                <Header icon>
                  <Icon name="wizard"></Icon>
                  A kind of magic!
            </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name="wizard"></Icon>
                  A kind of magic!
            </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name="wizard"></Icon>
                  A kind of magic!
            </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {/* Footer */}
        <Segment inverted vertical>
          <Container textAlign="center">
            <p>Powered with <Icon name="heart" /> by Gatsby 1.0</p>
          </Container>
        </Segment>
      </div>
    );
  }
}
