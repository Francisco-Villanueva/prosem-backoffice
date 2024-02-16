import { ERROR_MESSAGES, InputValidatorType } from "@/types";

export function inputValidators(type: InputValidatorType) {
  const emailValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.match(emailRegex) && value) {
      return ERROR_MESSAGES.email;
    }
    return null;
  };

  const passwordValidator = (value: string) => {
    const lowercaseRegex = /^(?=.*[a-z])/;
    const uppercaseRegex = /^(?=.*[A-Z])/;
    const digitRegex = /^(?=.*\d)/;
    const lengthRegex = {
      test: (value: string) => value.length >= 6,
    };

    const lowercaseCondition = () => {
      if ((value && !lowercaseRegex.test(value)) || value === "") {
        return ERROR_MESSAGES.passwordLowercase;
      }

      return null;
    };

    const uppercaseCondition = () => {
      if ((value && !uppercaseRegex.test(value)) || value === "") {
        return ERROR_MESSAGES.passwordUppercase;
      }
      return null;
    };

    const digitCondition = () => {
      if ((value && !digitRegex.test(value)) || value === "") {
        return ERROR_MESSAGES.passwordDigit;
      }
      return null;
    };

    const lengthCondition = () => {
      if ((value && !lengthRegex.test(value)) || value === "") {
        return ERROR_MESSAGES.passwordLength;
      }
      return null;
    };

    const array = [
      lowercaseCondition(),
      uppercaseCondition(),
      digitCondition(),
      lengthCondition(),
    ];

    return array;
  };

  const requiredField = (value: string) => {
    if (value.length < 1) {
      return ERROR_MESSAGES.required;
    }
    return null;
  };

  const weightValidator = (value: string) => {
    const numberRegex = /^[0-9.]+$/;
    if (!value.match(numberRegex) && value) {
      return ERROR_MESSAGES.weight;
    }
    return null;
  };

  const addressValidator = (value: string) => {
    const addressRegex = /^[a-zA-Z0-9\s.,#-]+$/;
    if (!value.match(addressRegex) && value) {
      return ERROR_MESSAGES.address;
    }
    return null;
  };

  const userNameValidator = (value: string) => {
    const trimmedUserName = value.trim();
    const userNameRegex = /^[a-zA-Z0-9.]+$/;
    if (!trimmedUserName.match(userNameRegex) && value) {
      return ERROR_MESSAGES.userName;
    }
    return null;
  };

  switch (type) {
    case "required": {
      return requiredField;
    }
    case "password": {
      return passwordValidator;
    }
    case "email": {
      return emailValidator;
    }
    case "weight": {
      return weightValidator;
    }
    case "address": {
      return addressValidator;
    }
    case "userName": {
      return userNameValidator;
    }
    case "no required":
      return ERROR_MESSAGES.noRequired;
  }
}
