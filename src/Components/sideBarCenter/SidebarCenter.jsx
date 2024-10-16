import React from "react";
import"bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SidebarCenter= () => {
  return(  
    <div className="sideCenter">
      <div className="col-center">          
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


       
      </div>    
      </div>
    )
}
    export default SidebarCenter;