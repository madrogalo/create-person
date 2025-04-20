import { useState } from "react";

import { Form } from "react-final-form";

import { FormHeader } from "../../FormHeader";
import { InputField } from "../../InputField";
import { Button } from "../../Button";
import {
  phoneValidator,
  required,
  validateDate,
  validateEmail,
  validateSecretWord,
  validateSerialNumber,
  validateValidUntil,
  validateWhenIssued,
} from "../../../utils/validators";
import "./CreatePersonForm.css";

export function CreatePersonForm() {
  const [formData, setFormData] = useState<any>(null);

  const onSubmit = (values: any) => {
    setFormData(values);
  };

  const optionalIfToggleOn =
    (toggleState: string) =>
    (value: string, allValues: Record<string, any>) => {
      return allValues?.[toggleState] ? required(value) : undefined;
    };

  return (
    <>
      <FormHeader title="Створення персони" />
      <Form
        initialValues={{
          toggle_patronymic: true,
          toggle_taxId: true,
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h2>Дані пацієнта</h2>
            <div style={{ display: "flex", gap: "10px", paddingTop: "10px" }}>
              <InputField
                label="Прізвище"
                name="surName"
                component="input"
                placeholder={""}
                isRequired
                validate={required}
              />

              <InputField
                label="Ім'я"
                name="name"
                component="input"
                placeholder={""}
                isRequired
                validate={required}
              />
              <InputField
                label="По батькові"
                name="patronymic"
                component="input"
                placeholder=""
                isToggle
                isRequired
                validate={optionalIfToggleOn("toggle_patronymic")}
                toggleName="toggle_patronymic"
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <InputField
                name="identificationNumber"
                component="input"
                label={"РНОКПП (IПH)"}
                placeholder={""}
                isToggle
                isRequired
                validate={optionalIfToggleOn("toggle_taxId")}
                toggleName="toggle_taxId"
              />

              <InputField
                name="dateOfBirth"
                component="input"
                label={"Дата народження"}
                placeholder={"01.10.1980"}
                isRequired
                formatDate
                validate={validateDate}
              />
              <InputField
                name="sex"
                component="select"
                label={"Стать"}
                placeholder={"-- Вибрати --"}
                isRequired
                validate={required}
                options={[
                  {
                    value: "male",
                    label: "Чоловік",
                  },
                  {
                    value: "female",
                    label: "Жінка",
                  },
                ]}
              />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <InputField
                name="countryOfBirth"
                component="input"
                placeholder={"Країна народження"}
                isRequired
                validate={required}
              />
              <InputField
                name="placeOfBirth"
                component="input"
                placeholder={"Місце народження"}
                isRequired
                validate={required}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", paddingTop: "10px" }}>
              <InputField
                name="preferredMethodCommunication"
                label="Бажаний спосіб звʼязку із пацієнтом"
                component="select"
                placeholder={"-- Вибрати --"}
                isRequired
                validate={required}
                options={[
                  {
                    value: "phone",
                    label: "Телефон",
                  },
                  {
                    value: "email",
                    label: "Електронною поштою",
                  },
                ]}
              />

              <InputField
                name="secretWord"
                component="input"
                placeholder={"Секретне слово (не менше 6 символів)"}
                isRequired
                validate={validateSecretWord}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", paddingTop: "10px" }}>
              <InputField
                name="phoneNumber"
                component="input"
                label={"Контактний номер телефону"}
                placeholder={"+38 (___)___-__-__"}
                isRequired
                formatPhone
                validate={phoneValidator}
              />
              <InputField
                name="email"
                component="input"
                label={"Адреса електронної пошти"}
                placeholder={"example@example.com"}
                isRequired
                validate={validateEmail}
              />
            </div>
            <h2>Документ, що посвідчує особу</h2>
            <div style={{ display: "flex", gap: "10px", paddingTop: "10px" }}>
              <InputField
                name="typeOfDocument"
                label="Тип документу"
                component="select"
                placeholder={"-- Вибрати --"}
                isRequired
                validate={required}
                options={[
                  {
                    value: "identificationOfPerson",
                    label:
                      "Посвідчення особи, яка потребує додаткового захисту",
                  },
                  { value: "PassportIDCard", label: "Паспорт (ID-картка)" },
                  { value: "PassportBooklet", label: "Паспорт (книжечка)" },
                  {
                    value: "PermanentResidencePermitInUkraine",
                    label: "Посвідка на постійне проживання в Україні",
                  },
                  { value: "RefugeeCertificate", label: "Посвідка біженця" },
                  {
                    value: "ResidencePermit",
                    label: "Посвідка на проживання",
                  },
                  {
                    value: "TemporaryCertificateCitizenOfUkraine",
                    label: "Тимчасове посвідчення громадянина України",
                  },
                ]}
              />

              <InputField
                name="serialNumber"
                component="input"
                label={"Серія (за наявності), номер"}
                placeholder={""}
                isRequired
                validate={validateSerialNumber}
              />
            </div>
            <div style={{ display: "flex", gap: "10px", paddingTop: "10px" }}>
              <InputField
                name="whenIssued"
                component="input"
                label={"Коли видано"}
                placeholder={"31.12.1971"}
                isRequired
                validate={validateWhenIssued}
                formatDate
              />
              <InputField
                name="validUntil"
                component="input"
                label={"Діє до"}
                placeholder={"31.12.1971"}
                isRequired
                validate={validateValidUntil}
                formatDate
              />
            </div>
            <div style={{ display: "flex", gap: "10px", paddingTop: "10px" }}>
              <InputField
                name="issuedBy"
                component="input"
                label={"Ким видано"}
                placeholder={""}
                isRequired
                validate={required}
              />
              <InputField
                name="recordUNRD"
                component="input"
                label={"Запис Nº (УНЗР)"}
                placeholder={"РРРРММДД-XXXXX"}
              />
            </div>
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
