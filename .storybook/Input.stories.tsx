import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {Input} from "../src/components/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Marbella/Input",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const PrimaryInput: Story = (args) => (
  <Input data-testId="InputField-id" {...args} />
);
PrimaryInput.args = {
  value: "false",
  placeholder: 'this input',
  onChange: () => {},
};