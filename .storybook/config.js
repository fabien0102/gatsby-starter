import { addDecorator, configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { addReadme } from 'storybook-readme';

setOptions({
  name: 'My website',
  downPanelInRight: true
});

addDecorator(addReadme);

// Stories loader
const req = require.context("../src", true, /.stories.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(req);
}

// Initialize react-storybook
configure(loadStories, module);
