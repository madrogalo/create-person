// src/components/MyForm.tsx
import { Form, Field } from "react-final-form";

export const MyForm = () => {
  const onSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component="input" placeholder="Last Name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};
