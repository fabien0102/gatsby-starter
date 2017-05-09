import * as React from "react";
import { LinkProps } from "react-router";

export interface MenuItem {
  name: string;
  path: string;
  exact: boolean;
  icon?: string;
  inverted?: boolean;
}

export interface MenuProps extends React.HTMLProps<HTMLDivElement> {
  items: MenuItem[];
  pathname: string;
  Link: React.ClassicComponentClass<LinkProps> | any;
}
