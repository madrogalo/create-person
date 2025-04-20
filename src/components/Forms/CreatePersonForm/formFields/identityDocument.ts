import {
  required,
  validateSerialNumber,
  validateWhenIssued,
} from "../../../../utils/validators";

export const identityDocument = [
  [
    {
      name: "typeOfDocument",
      label: "Тип документу",
      component: "select",
      placeholder: "-- Вибрати --",
      isRequired: true,
      validate: required,
      options: [
        {
          value: "identificationOfPerson",
          label: "Посвідчення особи, яка потребує додаткового захисту",
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
      ],
    },
    {
      name: "serialNumber",
      component: "input",
      label: "Серія (за наявності), номер",
      placeholder: "",
      isRequired: true,
      validate: validateSerialNumber,
    },
  ],
  [
    {
      name: "whenIssued",
      component: "input",
      label: "Коли видано",
      placeholder: "31.12.1971",
      isRequired: true,
      validate: validateWhenIssued,
      formatMask: "99.99.9999",
    },
    {
      name: "validUntil",
      component: "input",
      label: "Діє до",
      placeholder: "31.12.1971",
      formatMask: "99.99.9999",
    },
  ],
  [
    {
      name: "issuedBy",
      component: "input",
      label: "Ким видано",
      placeholder: "",
      isRequired: true,
      validate: required,
    },
    {
      name: "recordUNRD",
      component: "input",
      label: "Запис Nº (УНЗР)",
      placeholder: "РРРРММДД-XXXXX",
      formatMask: "99999999-99999",
    },
  ],
];
