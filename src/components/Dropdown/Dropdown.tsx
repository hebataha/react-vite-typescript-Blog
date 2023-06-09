import { useContext, useState } from "react";
import styles from "./style.module.scss";
import { ContextDropdown } from "../../Store/context/ContextDropdown/ContextDropdown";
export default function Dropdown({ valueDrop }) {
  const [value, setValue] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const ctx = useContext(ContextDropdown)
  function getValue(e) {
    
    setValue(e.target.value);
    ctx.setInputValue(e.target.value)
    (ctx.inputValue)

    // (e.target.value)
    // (value)
    // valueDrop(value)
    // setValue(optionValue);
    // (value);
  }
  // function optionValueFunction(e) {
  //   setOptionValue(e.target.value);
  //   (optionValue);
  // }
  // function Log() {
  //   valueDrop(value);
  // }
  return (
    <div className={styles.Dropdown}>
      <select onChange={(e) => getValue(e)} value={ctx.inputValue} >
        <option value="USD">USD</option>
        <option value="LE">LE</option>
        <option value="EUR"> EUR</option>
        <option value="JPY">JPY</option>
      </select>
    </div>
  );
}
