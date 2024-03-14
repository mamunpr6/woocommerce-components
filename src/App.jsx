import { useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea/Textarea";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputField from "./components/InputField/InputField/InputField";
import Checkbox from "./components/Checkbox/Checkbox";
import RadioButton from "./components/RadioButton/RadioButton";
import Button from "./components/Button/Button";
import spinner from "./assets/spinner.png";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className=" space-y-3 px-20">
      <div className="my-20">
        <InputField></InputField>
      </div>
      <Button>
        <span>Button CTA</span>
        <span className="w-5 h-5">
          <img src={spinner} alt="" />
        </span>
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

// https://www.youtube.com/watch?v=dr8LTvGAZ6A
