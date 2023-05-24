import { ChangeEventHandler } from "react";

export interface InputProps {
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
  }