import { FC } from "react";
import { Field } from "react-final-form";
import InputMask from "react-input-mask";
import { Toggle } from "../Toggle";

import "./InputField.css";

type InputFieldProps = {
  name: string;
  label?: string;
  component: "input" | "select" | "textarea";
  placeholder: string;
  isToggle?: boolean;
  isRequired?: boolean;
  validate?: (value: any, allValues?: any) => string | undefined;
  options?: Array<{ value: string; label: string }>;
  toggleName?: string;
  formatMask?: string;
};

export const InputField: FC<InputFieldProps> = ({
  name,
  label,
  component,
  placeholder,
  isToggle,
  isRequired,
  validate,
  formatMask,
  options,
  toggleName,
}) => {
  const validateWrapper = (value: string, allValues: any) => {
    if (isToggle && toggleName && !allValues?.[toggleName]) {
      return undefined;
    }
    return validate?.(value, allValues);
  };

  return (
    <div className="inputField">
      {label && (
        <label>
          {label} {isRequired && "*"}
        </label>
      )}

      <Field name={name} validate={validateWrapper}>
        {({ input, meta }) => (
          <>
            {component === "select" ? (
              <select
                {...input}
                className={meta.touched && meta.error ? "errorBorder" : ""}
              >
                <option value="" disabled>
                  {placeholder}
                </option>
                {options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : formatMask ? (
              <InputMask mask={formatMask} {...input} maskChar="_">
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    className={meta.touched && meta.error ? "errorBorder" : ""}
                    placeholder={placeholder}
                  />
                )}
              </InputMask>
            ) : (
              <input
                {...input}
                className={meta.touched && meta.error ? "errorBorder" : ""}
                placeholder={placeholder}
              />
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
      {isToggle && toggleName && (
        <Field name={toggleName} type="checkbox">
          {({ input }) => {
            return (
              <div className="toggle">
                <Toggle
                  checked={input.checked ?? false}
                  idToggle={toggleName}
                  onChange={input.onChange}
                />
              </div>
            );
          }}
        </Field>
      )}
    </div>
  );
};
