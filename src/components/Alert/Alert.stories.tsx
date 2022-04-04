import React from "react";
import { Meta, Story } from "@storybook/react";

import Alert from "./Alert";

export default {
  title: "BRIBrain/Alert",
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['withoutAction','withAction'],
      control: { type: 'select' },
      description: 'alert type',
    },
    style: {
      options: ['message-only','title-with-message','icon-title-with-message'],
      control: { type: 'select' },
      description: 'alert style',
    },
    variants: {
      options: ['default','close icon','action button','two action button'],
      control: { type: 'select' },
      description: 'alert variants',
    },
    state: {
      options: ['success','info','warning','error'],
      control: { type: 'select' },
      description: 'alert state',
    },
    // type: {
    //   options: ["letter", "number", "icon", "emblem"],
    //   control: { type: "select" },
    //   description: "alert type",
    // },
    // size: {
    //   options: ["lg", "md", "sm", "xs"],
    //   control: { type: "select" },
    //   defaultValue: "regular",
    //   description: "alert size",
    // },
    // src: {
    //   defaultValue: "",
    //   description: "image/icon source",
    // },
    // alt: {
    //   defaultValue: "",
    //   description: "image/icon alt",
    // },
    // number: {
    //   defaultValue: 0,
    //   description: "number",
    // },
  },
} as Meta<typeof Alert>;

const Template: Story<typeof Alert> = (args) => <Alert {...args} />;

export const AlertSuccessNoAction = Template.bind({});
AlertSuccessNoAction.args = {
  type: 'withoutAction',
  style: 'message-only',
  variants: 'default',
  state: 'success'
};
