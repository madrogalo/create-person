import React from "react";
import { Form, Field } from "react-final-form";

import { FormHeader } from "../../FormHeader";
import { InputField } from "../../InputField";
import { Toggle } from "../../Toggle";

export function CreatePersonForm() {
  const onSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };
  return (
    <>
      <FormHeader title="Створення персони" />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: "10px" }}>
              <InputField
                label="Фамілія"
                name="surName"
                component="input"
                placeholder={"Фамілія"}
                isRequired
              />

              <InputField
                label="Ім'я"
                name="Name"
                component="input"
                placeholder={"Ім'я"}
                isToggle
                isRequired
              />
              <InputField
                label="По батькові"
                name="patronymic"
                component="input"
                placeholder={""}
                isToggle
                isRequired
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <InputField
                name="countryOfBirth"
                component="input"
                placeholder={"Країна народження"}
                isRequired
              />
              <InputField
                name="placeOfBirth"
                component="input"
                placeholder={"Місце народження"}
                isRequired
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <InputField
                name="preferredMethodCommunication"
                label="Бажаний спосіб звʼязку із пацієнтом"
                component="select"
                placeholder={"Дата народження"}
                isRequired
              />
            </div>

            {/* <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                placeholder="Last Name"
              />
            </div> */}
            {/* <div>
              <label>Last Name</label>
              <Field
                name="option"
                component="select"
                placeholder="----Last Name"
              >
                <option value="FF0000">Red</option>
                <option value="00FF00">Green</option>
                <option value="0000FF">Blue</option>
              </Field>
            </div> */}
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </>
  );
}
