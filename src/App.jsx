import React from 'react';
import SideBarLeft from './components/SideBarLeft/SidebarMenu';
import SideBarRight from './components/SideBarRight/SideBarRight';
import SidebarCenter from './components/SideBarCenter/SideBarCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/generalStyles/app.css';

const App = () => {


  return (
    <div className="custom-aux">
         <SideBarLeft />
         <SidebarCenter />
         <SideBarRight />
    </div>
  );
};

export default App;

