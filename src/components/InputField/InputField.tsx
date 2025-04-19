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
  formatPhone?: boolean;
  formatDate?: boolean;
  toggleName?: string;
};

export const InputField: FC<InputFieldProps> = ({
  name,
  label,
  component,
  placeholder,
  isToggle,
  isRequired,
  validate,
  formatPhone,
  formatDate,
  options,
  toggleName,
}) => {
  return (
    <div className="inputField">
      {label && (
        <label>
          {label} {isRequired && "*"}
        </label>
      )}

      <Field name={name} validate={validate}>
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
            ) : formatPhone ? (
              <InputMask mask="+38 (099) 999-99-99" {...input} maskChar="_">
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    className={meta.touched && meta.error ? "errorBorder" : ""}
                    placeholder={placeholder}
                  />
                )}
              </InputMask>
            ) : formatDate ? (
              <InputMask mask="99.99.9999" {...input} maskChar="_">
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

      {isToggle && (
        <div className="toggle">
          <Toggle
            checked={true}
            idToggle={toggleName ? toggleName : "defaultId"}
          />
        </div>
      )}
    </div>
  );
};
