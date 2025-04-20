import { FC } from "react";
import { Field, useFormState } from "react-final-form";
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
  defaultText?: string;
  explanationText?: string;
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
  defaultText,
  explanationText,
}) => {
  const { values } = useFormState();

  const toggleValue = isToggle && toggleName ? values?.[toggleName] : undefined;
  const isDisabled = isToggle && toggleName && toggleValue === false;

  const validateWrapper = (value: string, allValues: any) => {
    if (isToggle && toggleName && allValues?.[toggleName] === false) {
      return undefined;
    }
    return validate?.(value, allValues);
  };

  return (
    <div className="inputField">
      {label && (
        <label>
          {label} {isRequired && (!isToggle || toggleValue) && "*"}
        </label>
      )}

      <Field name={name} validate={validateWrapper}>
        {({ input, meta }) => {
          const fieldClass =
            meta.touched && meta.error
              ? "errorBorder"
              : isDisabled
              ? "dashedBottom"
              : "";

          const commonProps = {
            ...input,
            className: fieldClass,
            placeholder,
            readOnly: !!isDisabled,
            value: isDisabled ? defaultText : input.value,
          };

          return (
            <>
              {component === "select" ? (
                <select {...input} className={fieldClass}>
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
                <InputMask
                  mask={formatMask}
                  {...input}
                  disabled={isDisabled || undefined}
                  maskChar="_"
                  value={isDisabled ? defaultText : input.value}
                >
                  {(inputProps) => (
                    <input
                      {...inputProps}
                      type="text"
                      className={fieldClass}
                      placeholder={placeholder}
                      readOnly={isDisabled}
                    />
                  )}
                </InputMask>
              ) : (
                <input {...commonProps} />
              )}

              <div style={{ height: 20 }}>
                {meta.touched && meta.error && (
                  <div className="error" style={{ color: "red", fontSize: 12 }}>
                    {meta.error}
                  </div>
                )}
                {isDisabled && explanationText && (
                  <div className="explanation">{explanationText}</div>
                )}
              </div>
            </>
          );
        }}
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
