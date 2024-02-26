import { RadioProps, Radio as AriaRadio } from "react-aria-components";
import styles from "./Radio.module.scss";

export function Radio(props: RadioProps) {
  return <AriaRadio className={styles.radio} {...props} />;
}
