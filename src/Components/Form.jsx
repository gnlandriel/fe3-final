import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(false);

  const onChangeName = (e) => {    
    setName(e.target.value)
  }
  
  const onChangeEmail = (e) => {    
    setEmail(e.target.value)
  }

  const validateName = name.length > 5

  const validateEmail = (email) => {
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    return validEmail.test(email)
  }

  const onSubmitForm = (e) => {    
    e.preventDefault()
    if(validateName && validateEmail(email)) {
      setMessage(true)
      return;
    }
    else{
      setMessage(false)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type = "text" placeholder="Ingrese su nombre" onChange={onChangeName} value={name}/>
        <input type = "email" placeholder="Ingrese su email" onChange={onChangeEmail} value={email}/>        
        <button>Enviar</button>
      </form>
      {message ? <div>Gracias {name} , te contactaremos cuanto antes vía mail</div> : <div>Por favor verifique su información nuevamente </div>}
    </div>
    
  );
};

export default Form;
