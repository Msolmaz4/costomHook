//hook icinde diger hooklrar kullanilabilir

import { useState } from "react"

export const useInput = (params) => {
    const [inputs,setInputs] = useState(params)

    const handleChange = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
      }
      return [inputs,handleChange]
}

