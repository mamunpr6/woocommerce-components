import { useEffect, useState } from "react";
import "./App.css";
import Textarea from "./components/Textarea/Textarea";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputField from "./components/InputField/InputField/InputField";
import Checkbox from "./components/Checkbox/Checkbox";
import RadioButton from "./components/RadioButton/RadioButton";
import Button from "./components/Button/Button";
import spinner from "./assets/spinner.png";
import SelectButton from "./components/SelectButton/SelectButton";
import SelectButton2 from "./components/SelectButton2/SelectButton2";

function App() {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  return (
    <div className=" space-y-10 px-20 mb-40">
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
      <SelectButton datas={datas}></SelectButton>
      <ToggleButton></ToggleButton>
      <Checkbox id="check"></Checkbox>
      <RadioButton name="radio"></RadioButton>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=dr8LTvGAZ6A
