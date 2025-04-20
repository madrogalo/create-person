import { useState } from "react";

import { Form } from "react-final-form";

import { FormHeader } from "../../FormHeader";
import { InputField } from "../../InputField";
import { Button } from "../../Button";
import { patientFieldGroups } from "./formFields/patientFields";
import { identityDocument } from "./formFields/identityDocument";

import "./CreatePersonForm.css";

export function CreatePersonForm() {
  const [formData, setFormData] = useState<any>(null);

  const onSubmit = (values: any) => {
    setFormData(values);
  };

  return (
    <>
      <FormHeader title="Створення персони" />
      <Form
        initialValues={{
          toggle_patronymic: true,
          toggle_identificationNumber: true,
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Дані пацієнта</h2>
            {patientFieldGroups.map((group, index) => (
              <div key={index} className="row">
                {group.map((field) => (
                  <InputField
                    key={field.name}
                    {...field}
                    component={
                      field.component as "input" | "select" | "textarea"
                    }
                  />
                ))}
              </div>
            ))}

            <h2>Документ, що посвідчує особу</h2>
            {identityDocument.map((group, index) => (
              <div key={index} className="row">
                {group.map((field) => (
                  <InputField
                    key={field.name}
                    {...field}
                    component={
                      field.component as "input" | "select" | "textarea"
                    }
                  />
                ))}
              </div>
            ))}
            <div className="buttonWrapper">
              <Button text={"Відправити"} />
            </div>
            {formData && <pre>{JSON.stringify(formData, null, 2)}</pre>}
          </form>
        )}
      />
    </>
  );
}
