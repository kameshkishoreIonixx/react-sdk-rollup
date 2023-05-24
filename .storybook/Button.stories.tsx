import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {Button} from "../src/components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
PrimaryButton.args = {
  onClick: () => {},
  disabled: false,
  text: "Primary",
};