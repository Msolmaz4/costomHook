import { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
    <h1> Costom hook</h1>
   

    { /* prettier-ignore */}
    <form>
      <label htmlFor="name">
      Name: <input name="name" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label htmlFor="age">
      Age: <input name="age" value={age} onChange={e => setAge(e.target.value)} />
      </label>
      <label htmlFor="email">
      Email: <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
    </form>
  </div>
  )
}

export default App
