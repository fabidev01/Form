import { useForm } from "./useForm"

export const FormControl = () => {

  const { nombre, email, password, onReset, onInputChange } = useForm({
    nombre: "",
    email: "",
    password: ""
  })

  return (
    <div className="form card bg-blur">
      <h1>Login</h1>
      <form>
        <div className="inputs">
          <input 
          onChange={ onInputChange } 
            placeholder="nombre" 
            type="text"
            value={ nombre }
          />
          <input 
          onChange={ onInputChange } 
            placeholder="email" 
            type="email"
            value={ email }
          />
          <input 
          onChange={ onInputChange } 
            placeholder="password" 
            type="password"
            value={ password }
          />
        </div>
      </form>
      <button onClick={ onReset }>Reset</button>
    </div>
  )
}
