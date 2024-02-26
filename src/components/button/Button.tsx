import { Button as RACButton, ButtonProps } from "react-aria-components";
import styles from "./Button.module.scss";

export function Button(props: ButtonProps) {
  const { className, ...rest } = props;

  return (
    <RACButton className={`${styles.button} ${className || ""}`} {...rest} />
  );
}
