
import { useInput } from "./hooks/useInput";


function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // const [inputs,setInputs] = useState({name:'',age:'',email:''})


  // const handleChange = (e)=>{
  //   setInputs({...inputs,[e.target.name]:e.target.value})
  //   console.log(inputs)
  // }
  //burada useInputta bos birdeger verdimi hata aliriy nedin unkontrol vea kontrol konsolda coyukiuor react doma ilgili
  //console.js:213 Warning: A component is changing an uncontrolled input to be controlled.
  //bu yuden baslangic degeri veritir
  const [inputs,setInputs] = useInput({name:'',age:'',email:''})

  return (
    <div className="App">
    <h1> Costom hook</h1>
   

    { /* prettier-ignore */}
    <form>
      <label htmlFor="name">
      Name: <input name="name" value={inputs.name} onChange={setInputs} />
      </label>
      <label htmlFor="age">
      Age: <input name="age" value={inputs.age}  onChange={setInputs} />
      </label>
      <label htmlFor="email">
      Email: <input name="email" value={inputs.email}  onChange={setInputs} />
      </label>
    </form>
  </div>
  )
}

export default App
