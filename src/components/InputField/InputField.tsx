import { FC } from "react";
import { Form, Field } from "react-final-form";

import "./InputField.css";
import { Toggle } from "../Toggle";

type InputFieldProps = {
  name: string;
  label?: string;
  component: "input" | "select" | "textarea";
  placeholder: string;
  isToggle?: boolean;
  isRequired?: boolean;
};
export const InputField: FC<InputFieldProps> = ({
  label,
  isToggle,
  isRequired,
  ...props
}) => {
  return (
    <div className="inputField">
      {label && (
        <label>
          {label} {isRequired && "*"}
        </label>
      )}
      <Field {...props} />
      {isToggle && (
        <div className="toggle">
          <Toggle />
        </div>
      )}
    </div>
  );
};
