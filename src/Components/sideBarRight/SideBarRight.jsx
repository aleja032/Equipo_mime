import React from "react";
import Adele from "../../assets/images/general/Adele.jpg";
import logo from "../../assets/images/general/logoMime.png";
import harry from "../../assets/images/general/HARRY.jpg";
import hermoni from "../../assets/images/general/Hermione.jpg";
import arthutr from "../../assets/images/general/Arthur Fleck.jpg";
import josemad from "../../assets/images/general/Jose Madero.jpg";

function SideBarRight(){
    return(  
    <div className="sideInfo border-start">
        <div className="row ">         
            <div className="col d-flex flex-column ">
                <a className="border-bottom d-flex justify-content-center align-items-center">
                    <img src={logo} alt="perfil" className=""></img> 
                </a>
                <ul className="user-list ">
                    <li className="mt-3 user-item">
                        <img src={Adele} alt="Foto de usuario" className="" />
                        <span>Adele</span>
                        <button className="ms-4 px-3 ">Seguir</button>
                    </li>
                    <li className="mt-3 user-item">
                        <img src={arthutr} alt="Foto de usuario" className=""/>
                        <span>Arthur Fleck</span>
                        <button>Seguir</button>
                    </li>
                    <li className="mt-3 user-item">
                        <img src={harry} alt="Foto de usuario" className=""/>
                        <span>Harry Potter 3</span>
                        <button className="ms-4 px-3 ">Seguir</button>
                    </li>

                    <li className="mt-3 user-item">
                        <img src={hermoni} alt="Foto de usuario" className=""/>
                        <span>Hermione 3</span>
                        <button className="ms-4 px-3 ">Seguir</button>
                    </li>

                    <li className="mt-3 user-item">
                        <img src={josemad} alt="Foto de usuario" className=""/>
                        <span>Jose Madero 3</span>
                        <button className="ms-4 px-3 ">Seguir</button>
                    </li>
                </ul>
            </div>
        </div>    
    </div>
  
    
    )
}
export default SideBarRight;