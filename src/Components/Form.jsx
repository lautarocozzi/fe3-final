import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user,setUser] = useState({
    nombre:"",
    email:""
  })

  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)

    if(user.nombre.length > 5  && isValidEmail(user.email)){ //
      setError(false)
      setShow(true)
    }else{
      setError(true)
      setShow(false)
    }
    
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre: " onChange={(e) => {setShow(false); return setUser({...user,nombre: e.target.value.trimStart()})}}/>
        <input type="text" name="email" placeholder="Email:" onChange={(e) => {setShow(false); return setUser({...user,email: e.target.value})}}/>
        <button>Enviar!</button>
      </form>
      {error && <h4>Por favor verifique su información nuevamente</h4>}
      {show ? <h4>Gracias {user.nombre}, te contactaremos cuando antes vía mail</h4> : ""
    
    }
    </div>
  );
};

export default Form;
 