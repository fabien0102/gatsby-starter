import { shallow } from "enzyme";
import "jest";
import * as React from "react";
import {{pascalCase name}} from "./{{pascalCase name}}";

describe("{{pascalCase name}} component", () => {
  it("should have the correct text", () => {
    const {{name}} = shallow(<{{pascalCase name}} />);
    expect({{name}}.text()).toBe("My awesome component");
  });
});
