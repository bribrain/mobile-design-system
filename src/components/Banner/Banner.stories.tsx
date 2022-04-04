import React from "react";
import { Meta, Story } from "@storybook/react";

import Banner from "./Banner";

export default {
  title: "BRIBrain/Banner",
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    action: {
      defaultValue: false,
      description: "action button",
    },
    actionText: {
      defaultValue: 'ACTION',
      description: "action button",
    },
    state: {
      options: ["success", "info", "warning", "error"],
      control: { type: "select" },
      description: "state",
    },
    message: {
      defaultValue: "",
      description: "action button",
    },
  },
} as Meta<typeof Banner>;

const text: string = "XA";
const number: number = 10;
const Template: Story<typeof Banner> = (args) => <Banner {...args} />;

export const BannerSuccess = Template.bind({});
BannerSuccess.args = {
  action: false,
  actionText: '',
  state: "success",
  message: "Success Message",
};

// export const NumberMd = Template.bind({});
// NumberMd.args = {
//   number: number,
//   type: "number",
//   size: "md",
// };
