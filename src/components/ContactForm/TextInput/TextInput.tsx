import { useFormControl, FormControlProps } from "@mongez/react-form";


export default function TextInput(props :FormControlProps) {
  const{value,changeValue} = useFormControl(props);
  // console.log(props)
  return (
    <>
         <input
      type="text"
      value={value}
      onChange={e =>  changeValue(e.target.value)
      }
    />
    </>
  );
}
