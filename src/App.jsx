import { useState } from "react";
import "./App.css";
import MultiTypeInput from "./components/InputField/InputField/InputField";
import paymentIcon from "./assets/Payment method icon.png";
import Textarea from "./components/Textarea/Textarea";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputField from "./components/InputField/InputField/InputField";
import Checkbox from "./components/Checkbox/Checkbox";
import RadioButton from "./components/RadioButton/RadioButton";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-5">
      <InputField
        type="text"
        value={email}
        onChange={handleEmailChange}
        label="Email"
      ></InputField>
      <Textarea></Textarea>
      <ToggleButton></ToggleButton>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
      <RadioButton></RadioButton>
      <RadioButton></RadioButton>
    </div>
  );
}

export default App;
