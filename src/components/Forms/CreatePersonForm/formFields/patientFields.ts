import {
  phoneValidator,
  required,
  validateDate,
  validateEmail,
  validateSecretWord,
} from "../../../../utils/validators";

const optionalIfToggleOn =
  (toggleState: string) => (value: string, allValues: any) =>
    allValues?.[toggleState] ? required(value) : undefined;

export const patientFieldGroups = [
  [
    {
      label: "Прізвище",
      name: "surName",
      component: "input",
      placeholder: "",
      isRequired: true,
      validate: required,
    },
    {
      label: "Ім'я",
      name: "name",
      component: "input",
      placeholder: "",
      isRequired: true,
      validate: required,
    },
    {
      label: "По батькові",
      name: "patronymic",
      component: "input",
      placeholder: "",
      isToggle: true,
      isRequired: true,
      toggleName: "toggle_patronymic",
      validate: optionalIfToggleOn("toggle_patronymic"),
      defaultText: "Немає по батькові",
      explanationText: "Немає по батькові згідно документів",
    },
  ],
  [
    {
      name: "identificationNumber",
      label: "РНОКПП (IПH)",
      component: "input",
      placeholder: "",
      isToggle: true,
      isRequired: true,
      toggleName: "toggle_identificationNumber",
      validate: optionalIfToggleOn("toggle_identificationNumber"),
      defaultText: "Немає РНОКПП (ІПН)",
      explanationText: "Немає ІПН за віком чи має відмітку у паспорті",
    },
    {
      name: "dateOfBirth",
      label: "Дата народження",
      component: "input",
      placeholder: "01.10.1980",
      isRequired: true,
      formatMask: "99.99.9999",
      validate: validateDate,
    },
    {
      name: "sex",
      label: "Стать",
      component: "select",
      placeholder: "-- Вибрати --",
      isRequired: true,
      validate: required,
      options: [
        { value: "male", label: "Чоловік" },
        { value: "female", label: "Жінка" },
      ],
    },
  ],
  [
    {
      name: "countryOfBirth",
      component: "input",
      placeholder: "Країна народження",
      isRequired: true,
      validate: required,
    },
    {
      name: "placeOfBirth",
      component: "input",
      placeholder: "Місце народження",
      isRequired: true,
      validate: required,
    },
  ],
  [
    {
      name: "preferredMethodCommunication",
      label: "Бажаний спосіб звʼязку із пацієнтом",
      component: "select",
      placeholder: "-- Вибрати --",
      isRequired: true,
      validate: required,
      options: [
        { value: "phone", label: "Телефон" },
        { value: "email", label: "Електронною поштою" },
      ],
    },
    {
      name: "secretWord",
      component: "input",
      placeholder: "Секретне слово (не менше 6 символів)",
      isRequired: true,
      validate: validateSecretWord,
    },
  ],
  [
    {
      name: "phoneNumber",
      label: "Контактний номер телефону",
      component: "input",
      placeholder: "+38 (___)___-__-__",
      isRequired: true,
      formatMask: "+38 (099) 999-99-99",
      validate: phoneValidator,
    },
    {
      name: "email",
      label: "Адреса електронної пошти",
      component: "input",
      placeholder: "example@example.com",
      isRequired: true,
      validate: validateEmail,
    },
  ],
];
