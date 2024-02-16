"use client";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { UseInputInterface } from "@/interfaces";
import { inputValidators } from "@/utils";
import { ERROR_MESSAGES, TypeOfInputs } from "@/types";
export default function useInput({
  initialValue,
  validatorType,
}: UseInputInterface) {
  const validateFunction = inputValidators(validatorType);
  const [value, setValue] = useState(initialValue || "");
  const [type, setType] = useState<TypeOfInputs>("text");
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const [error, setError] = useState<string | (string | null)[] | null>(
    validatorType === "password"
      ? [
          ERROR_MESSAGES.passwordDigit,
          ERROR_MESSAGES.passwordLowercase,
          ERROR_MESSAGES.passwordUppercase,
          ERROR_MESSAGES.passwordLength,
        ]
      : null
  );
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    switch (validatorType) {
      case "address":
        return setType("text");
      case "email":
        return setType("text");
      case "name":
        return setType("text");
      case "password":
        return setType("password");
    }
  }, [validatorType]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value || "");
    if (validatorType === "password" && validateFunction) {
      setError(validateFunction(e.target.value));
    }
  }, []);

  const handleOption = () => {};

  const onBlur = useCallback(() => {
    setTouched(true);

    if (validateFunction && value) {
      setError(validateFunction(value));
    }
  }, [validateFunction, value, selectedOption]);

  const onFocus = useCallback(() => {
    setTouched(false);

    if (validatorType !== "password") {
      setError(null);
    }
  }, []);

  const clearInput = useCallback(() => {
    setValue(initialValue || "");
    setSelectedOption(initialValue);
  }, [initialValue]);
  return {
    value,
    error,
    touched,
    onChange,
    onBlur,
    onFocus,
    handleOption,
    selectedOption,
    clearInput,
    type,
  };
}
