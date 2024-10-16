import { useState } from 'react';
import SidebarMenu from './Components/sideBarLeft/SidebarMenu'
import './App.css';
import SidebarInf from "./Components/sideBarRight/SidebarInf";
import SidebarCenter from './Components/sideBarCenter/SidebarCenter';

function App() {
  

  return (
    <>
      <div>
        <SidebarMenu/>
        <SidebarCenter/>
        <SidebarInf/>
       </div> 
       </>
  )
}

export default App
