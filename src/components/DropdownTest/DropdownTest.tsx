import { useContext, useState } from "react";
import { ContextDropdown } from "../../Store/context/ContextDropdown/ContextDropdown";

export default function DropdownTest() {
  const [selectValue, setSelectValue]= useState("")
  const ctx = useContext(ContextDropdown)



  function getDropValue(e) {
    setSelectValue(e.target.value);
    ctx.setInputValue(e.target.value)
  }
  console.log(ctx)
  return (
    <>
      <select onChange={getDropValue} value={ctx.inputValue}>
        <option value="1">LE</option>
        <option value="2">USD</option>
        <option value="3">JPT</option>
      </select>
    </>
  );
}
