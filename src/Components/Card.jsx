import React from "react";


const Card = ({ name, username, id}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <>
          <h1>{id} - {name}</h1>
          <img src="../images/doctor.jpg" alt="doctor" width= {150}/>
          <h2>{username}</h2>
        </>   
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
