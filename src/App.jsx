import { useState } from "react";
import "./App.css";
import MultiTypeInput from "./components/InputField/InputField/InputField";
import paymentIcon from "./assets/Payment method icon.png";
import Textarea from "./components/Textarea/Textarea";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputField from "./components/InputField/InputField/InputField";

function App() {
  const [count, setCount] = useState(0);
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
      <Textarea label="Write your message here"></Textarea>
      <ToggleButton></ToggleButton>
    </div>
  );
}

export default App;
