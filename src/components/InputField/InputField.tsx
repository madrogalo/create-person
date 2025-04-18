// src/components/InputField/index.tsx
import { FC } from "react";
import { Field } from "react-final-form";
import "./InputField.css";
import { Toggle } from "../Toggle";

type InputFieldProps = {
  name: string;
  label?: string;
  component: "input" | "select" | "textarea";
  placeholder: string;
  isToggle?: boolean;
  isRequired?: boolean;
  validate?: (value: any) => string | undefined;
  options?: Array<{ value: string; label: string }>;
};

export const InputField: FC<InputFieldProps> = ({
  label,
  isToggle,
  isRequired,
  validate,
  options,
  ...props
}) => {
  return (
    <div className="inputField">
      {label && (
        <label>
          {label} {isRequired && "*"}
        </label>
      )}

      <Field {...props} validate={validate}>
        {({ input, meta }) => (
          <>
            {props.component === "select" ? (
              <select {...input}>
                <option value="" disabled selected>
                  {props.placeholder}
                </option>
                {options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input {...input} placeholder={props.placeholder} />
            )}
            <div style={{ height: 20 }}>
              {meta.touched && meta.error && (
                <div className="error" style={{ color: "red", fontSize: 12 }}>
                  {meta.error}
                </div>
              )}
            </div>
          </>
        )}
      </Field>

      {isToggle && (
        <div className="toggle">
          <Toggle />
        </div>
      )}
    </div>
  );
};
