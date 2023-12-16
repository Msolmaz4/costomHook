//hook icinde diger hooklrar kullanilabilir

import { useState } from "react"

export const useInput = () => {
    const [inputs,setInputs] = useState({})

    const handleChange = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
      }
      return [inputs,handleChange]
}

