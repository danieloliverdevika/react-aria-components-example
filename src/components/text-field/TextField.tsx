import {
  FieldError,
  Input,
  Label,
  Text,
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import styles from "./TextField.module.scss";

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField className={styles.textField} {...props}>
      <Label className={styles.label}>{label}</Label>
      <Input className={styles.input} />
      {description && <Text slot="description">{description}</Text>}
      <FieldError className={styles.fieldError}>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
