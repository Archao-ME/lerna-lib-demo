import HelloWorld from "./HelloWorld";
import { ComponentMeta } from "@storybook/react";
import * as React from "react";

export default {
  title: "Components/HelloWorld",
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

export const FirstWorld = () => <HelloWorld />;
