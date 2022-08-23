import { useState } from "react";

export const useForm = ( inputStart ) => {
  const [inputValue, setInputValue] = useState( inputStart );

  const onInputChange = ({ target })=> {
    const name = target.placeholder;
    const value = target.value;
    setInputValue({
      ...inputValue, 
      [name]: value
    })
  }
  const onReset = ()=> {
    setInputValue( inputStart );
  }

  return{
    inputValue,
    onReset,
    onInputChange,
    ...inputValue
  }
}
