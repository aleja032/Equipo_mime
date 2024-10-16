import React from "react";
import"bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function SidebarInf(){
    return(  
    <div className="sideInfo">             
      <div className="col">
        <a className="text-decoration-none justify-content-center align-items-center p-3">
           <img src="/src/assets/logoMime.png" alt="perfil"></img> 
        </a>
        <ul className="user-list">
            <li className="user-item">
                <img src="/src/assets/Adele.jpg" alt="foto1"/>
                <span>Adele</span>
                <button>Seguir</button>
            </li>
            <li className="user-item">
                <img src="/src/assets/Arthur Fleck.jpg" alt="Foto de usuario"/>
                <span>Arthur Fleck</span>
                <button>Seguir</button>
            </li>
            <li className="user-item">
                <img src="/src/assets/HARRY.jpg" alt="Foto de usuario"/>
                <span>Harry Potter 3</span>
                <button>Seguir</button>
            </li>

            <li className="user-item">
                <img src="/src/assets/Hermione.jpg" alt="Foto de usuario"/>
                <span>Hermione 3</span>
                <button>Seguir</button>
            </li>

            <li className="user-item">
                <img src="/src/assets/Jose Madero.jpg" alt="Foto de usuario"/>
                <span>Jose Madero 3</span>
                <button>Seguir</button>
            </li>
        </ul>
      </div>
    </div>
  
    
    )
}
export default SidebarInf;