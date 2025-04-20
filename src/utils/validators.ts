export const required = (value: string) =>
  value ? undefined : "Поле не може бути пустим";

export const phoneValidator = (value: string) => {
  const phoneRegex = /^\+38\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  return phoneRegex.test(value)
    ? undefined
    : "Некоректний номер телефона. Приклад: +38 (093) 999-88-77";
};

export const validateSerialNumber = (
  value: string,
  allValues: Record<string, any>
) => {
  const type = allValues?.typeOfDocument;

  if (!value) return "Поле не може бути пустим";

  const isPassportBooklet = type === "PassportBooklet";

  const regexPassportBooklet = /^[А-Яа-яІіЇїЄєҐґ]{2}\d{6}$/;
  const regexOther = /^[А-Яа-яІіЇїЄєҐґ]{3}\d{5,9}$/;

  if (isPassportBooklet) {
    return regexPassportBooklet.test(value)
      ? undefined
      : "Має бути 2 літери (укр) та 6 цифр";
  } else {
    return regexOther.test(value)
      ? undefined
      : "Має бути 3 літери (укр) та від 5 до 9 цифр";
  }
};

export const validateEmail = (value: string) => {
  if (!value) return "Поле не може бути пустим";

  if (!value.includes("@")) {
    return "Email має містити символ '@'";
  }

  const parts = value.split("@");
  if (parts.length !== 2 || !parts[1]) {
    return "Email має містити домен після '@'";
  }

  if (!parts[1].includes(".")) {
    return "Email має містити '.' після '@'";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? undefined : "Невірний формат email";
};

export const validateSecretWord = (value: string) => {
  if (!value) return "Поле не може бути пустим";

  if (value.length < 6) {
    return "Секретне слово має містити щонайменше 6 символів";
  }

  return undefined;
};

export const validateDate = (value: string) => {
  if (!value) return "Поле не може бути пустим";

  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
  if (!dateRegex.test(value)) {
    return "Дата має бути у форматі ДД.ММ.РРРР";
  }

  const [day, month, year] = value.split(".").map(Number);
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return "Недійсна дата";
  }

  return undefined;
};

export const validateWhenIssued = (
  value: string,
  allValues: Record<string, any>
) => {
  if (!value) return "Поле не може бути пустим";

  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
  if (!dateRegex.test(value)) {
    return "Дата має бути у форматі ДД.ММ.РРРР";
  }

  const [d, m, y] = value.split(".").map(Number);
  const issuedDate = new Date(y, m - 1, d);
  const today = new Date();

  if (issuedDate > today) {
    return "Дата видачі не може бути в майбутньому";
  }

  if (allValues?.dateOfBirth) {
    const [bd, bm, by] = allValues.dateOfBirth.split(".").map(Number);
    const birthDate = new Date(by, bm - 1, bd);

    if (issuedDate < birthDate) {
      return "Дата видачі не може бути раніше дати народження";
    }
  }

  return undefined;
};

export const validateValidUntil = (
  value: string,
  allValues: Record<string, any>
) => {
  if (!value) return "Поле не може бути пустим";

  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
  if (!dateRegex.test(value)) {
    return "Дата має бути у форматі ДД.ММ.РРРР";
  }

  const [dV, mV, yV] = value.split(".").map(Number);
  const validDate = new Date(yV, mV - 1, dV);
  const today = new Date();

  if (validDate < today) {
    return "Термін дії не може бути в минулому";
  }

  const parseDate = (str: string) => {
    const [d, m, y] = str.split(".").map(Number);
    return new Date(y, m - 1, d);
  };

  if (allValues?.dateOfBirth) {
    const birthDate = parseDate(allValues.dateOfBirth);
    if (validDate < birthDate) {
      return "Термін дії не може бути раніше дати народження";
    }
  }

  if (allValues?.whenIssued) {
    const issuedDate = parseDate(allValues.whenIssued);
    if (validDate < issuedDate) {
      return "Термін дії не може бути раніше дати видачі";
    }
  }

  return undefined;
};
