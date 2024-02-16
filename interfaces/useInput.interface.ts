import { InputValidatorType, TypeOfInputs } from "@/types";
import { ChangeEvent } from "react";

export interface UseInputInterface {
  value?: string;
  error?: string | null;
  type?: TypeOfInputs;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  handleOption?: () => void;
  selectedOption?: string;
  clearInput?: () => void;
  initialValue?: string;
  validatorType: InputValidatorType;
  touched?: boolean;
}
