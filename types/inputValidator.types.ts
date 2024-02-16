export type ValidatorType = "required" | "password" | "email";
export type InputValidatorType =
  | "required"
  | "password"
  | "email"
  | "name"
  | "no required"
  | "weight"
  | "address"
  | "userName";

export const ERROR_MESSAGES = {
  noRequired: null,
  required: "Required field",
  email: "Enter a valid emial",
  passwordLength: "Debe contener mínimo 6 caracteres",
  passwordLowercase: "Mínimo 1 minúscula.",
  passwordUppercase: "Mínimo  1 mayúscula.",
  passwordDigit: "Mínimo 1 número.",
  weight: "Ingresar un peso válido",
  address: "Ingresar una dirección válida",
  userName: "El usuario solo puede contener letras, números y puntos",
};
export type ErrorType = keyof typeof ERROR_MESSAGES;
export type ErrorMessage = (typeof ERROR_MESSAGES)[keyof typeof ERROR_MESSAGES];
export type TypeOfInputs = "text" | "password" | "number" | "email";
