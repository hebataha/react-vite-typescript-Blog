import { useContext, useState } from "react";
import { ContextDropdown } from "../../Store/context/ContextDropdown/ContextDropdown";

export default function DropdownTest({  getDropValue,ctxValue ,getProps}) {

function reciveData(){
  getProps(ctxValue)
}
  return (
    <>
   
    <h1> </h1>
      <select onChange={getDropValue} value={ctxValue}>
        <option value="1">LE</option>
        <option value="2">USD</option>
        <option value="3">JPT</option>
      </select>
    </>
  );
}
