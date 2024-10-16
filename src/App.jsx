import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/slice/posts/postThunk';
import PostCard from './components/postCard/PostCard';
import SideBarLeft from './components/SideBarLeft/SidebarMenu';
import SideBarRight from './components/SideBarRight/SideBarRight';
import SidebarCenter from './components/SideBarCenter/SideBarCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './bootstrap-icons/font/bootstrap-icons.css';

import './App.css';

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

