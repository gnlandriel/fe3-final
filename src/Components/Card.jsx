import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
          <div>
            <h1><Link to = {`/detail/${id}`}> {name}</Link> </h1>
            <img src="../images/doctor.jpg" alt="doctor" width= {150}/>
            <h2>{username}</h2>
          </div>  
        
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
