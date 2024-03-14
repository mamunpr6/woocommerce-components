import { useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea/Textarea";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputField from "./components/InputField/InputField/InputField";
import Checkbox from "./components/Checkbox/Checkbox";
import RadioButton from "./components/RadioButton/RadioButton";
import Button from "./components/Button/Button";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-5">
      <InputField></InputField>
      <Button>
        <span>Button CTA</span>
        <span> </span>
      </Button>
      <Textarea></Textarea>
      <ToggleButton></ToggleButton>
      <Checkbox id="check"></Checkbox>
      <RadioButton name="radio"></RadioButton>
      <RadioButton name="radio"></RadioButton>
    </div>
  );
}

export default App;

<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="14" height="14" rx="7" fill="#1EB2FB"></rect>
  <path
    d="M5 4.50293C5.0741 3.60881 5.85381 2.94065 6.74894 3.00418H7.24864C8.14377 2.94065 8.92347 3.60881 8.99758 4.50293C9.03538 5.16925 8.62793 5.78028 7.99818 6.00167C7.30536 6.41742 6.91577 7.19643 6.99879 8"
    stroke="white"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
  <path
    d="M7.5 10.9975V11.0025"
    stroke="white"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
</svg>;
