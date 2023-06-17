import { createContext, useState } from "react";

export const ContextDropdown = createContext({})


function ContextDropdownProvider (props){
  const [value,setValue] = useState("")
  return(
    <ContextDropdown.Provider value={{
      inputValue:value,
      setInputValue:setValue,
    }}>
      {props.children}
    </ContextDropdown.Provider>
  )
}

export default ContextDropdownProvider;