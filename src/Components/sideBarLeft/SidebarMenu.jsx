import React from "react";
import"bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SidebarMenu(){
    return(               
        <div className="col-container">
              <a className="text-decoration-none text-black d-flex align-items-center p-3">
                  <img src="/src/assets/perfil.png" alt="perfil"></img>
                  <span className="ms-2 fs-4">Mime Girl</span>     
                  <i className="bi bi-check-all"></i>        
              </a>

              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0"></div>
             
              <ul className="nav flex-column">
                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-house"></i>
                          <span className="ms-2">Home</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-search"></i>
                          <span className="ms-2">Buscar</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-film"></i>
                          <span className="ms-2">Reels</span>
                      </a>
                  </li>

                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-chat-left-text"></i>
                          <span className="ms-2">Mensajes</span>
                      </a>
                  </li>

                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-bell"></i>
                          <span className="ms-2">Notificaciones</span>
                      </a>
                  </li>

                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-table"></i>
                          <span className="ms-2">Calendario</span>
                      </a>
                  </li>

                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-list-task"></i>
                          <span className="ms-2">Más</span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <a href="#" className="nav-link text-black fs-5">
                          <i className="bi bi-list-task"></i>
                          <span className="ms-2">Más</span>
                      </a>
                  </li>

                 
              </ul>
          </div>
         
    
 
  
);
}


 
export default SidebarMenu;