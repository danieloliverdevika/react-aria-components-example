import styles from "./App.module.scss";
import { TextField } from "./components/text-field/TextField";
import { Button } from "./components/button/Button";
import { RadioGroup } from "./components/radio-group/RadioGroup";
import { Radio } from "./components/radio/Radio";
import { useEffect, useState } from "react";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);

  return (
    <div className={styles.app}>
      <div className={styles.login}>
        <TextField label="Username" />
        <TextField label="Password" />
        <Button className={styles.button}>Login</Button>
      </div>
      <div className={styles.themes}>
        <RadioGroup
          label="Theme"
          value={selectedTheme}
          onChange={setSelectedTheme}
        >
          <Radio value="default">Default</Radio>
          <Radio value="green">Green</Radio>
          <Radio value="orange">Orange</Radio>
        </RadioGroup>
      </div>
    </div>
  );
}

export default App;
