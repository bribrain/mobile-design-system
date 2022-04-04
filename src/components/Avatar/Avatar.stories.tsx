import React from "react";
import { Meta, Story } from "@storybook/react";

import Avatar from "./Avatar";

export default {
  title: "BRIBrain/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: {
      defaultValue: "Lorem ipsum dolor sit amet",
      description: "text",
    },
    type: {
      options: ["letter", "number", "icon", "emblem"],
      control: { type: "select" },
      description: "avatar type",
    },
    size: {
      options: ["lg", "md", "sm", "xs"],
      control: { type: "select" },
      defaultValue: "regular",
      description: "avatar size",
    },
    src: {
      defaultValue: "",
      description: "image/icon source",
    },
    alt: {
      defaultValue: "",
      description: "image/icon alt",
    },
    number: {
      defaultValue: 0,
      description: "number",
    },
  },
} as Meta<typeof Avatar>;

const text: string = "XA";
const number: number = 10;
const Template: Story<typeof Avatar> = (args) => <Avatar {...args} />;

export const LetterLg = Template.bind({});
LetterLg.args = {
  text: text,
  type: "letter",
  size: "lg",
};

export const NumberMd = Template.bind({});
NumberMd.args = {
  number: number,
  type: "number",
  size: "md",
};

// export const Heading2 = Template.bind({});
// Heading1.args = {
//   text: text,
//   variant: "header-small",
//   weight: "regular",
// };

// export const Subtitle1 = Template.bind({});
// Heading1.args = {
//   text: text,
//   variant: "subtitle-base",
//   weight: "regular",
// };

// export const Subtitle2 = Template.bind({});
// Heading1.args = {
//   text: text,
//   variant: "subtitle-small",
//   weight: "regular",
// };

// export const Body1 = Template.bind({});
// Heading1.args = {
//   text: text,
//   variant: "body-base",
//   weight: "regular",
// };

// export const Body2 = Template.bind({});
// Heading1.args = {
//   text: text,
//   variant: "body-small",
//   weight: "regular",
// };

// export const Caption1 = Template.bind({});
// Heading1.args = {
//   text: text,
//   variant: "caption-base",
//   weight: "regular",
// };
