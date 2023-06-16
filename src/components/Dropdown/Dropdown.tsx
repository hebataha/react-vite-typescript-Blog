import { useState } from "react";
import styles from "./style.module.scss";
export default function Dropdown({ valueDrop }) {
  const [value, setValue] = useState("");
  const [optionValue, setOptionValue] = useState("");

  function getValue(e) {
    setValue(e.target.value);
    // console.log(e.target.value)
    // console.log(value)
    // valueDrop(value)
    // setValue(optionValue);
    // console.log(value);
  }
  // function optionValueFunction(e) {
  //   setOptionValue(e.target.value);
  //   console.log(optionValue);
  // }
  // function Log() {
  //   valueDrop(value);
  // }
  return (
    <div className={styles.Dropdown}>
      <select onChange={(e) => getValue(e)} value={value} >
        <option value="USD">USD</option>
        <option value="LE">LE</option>
        <option value="EUR"> EUR</option>
        <option value="JPY">JPY</option>
      </select>
    </div>
  );
}
