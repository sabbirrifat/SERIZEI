import React from 'react';
import NavBar from '../NavBar/NavBar';
import DashboardNav from '../NavBar/DashboardNav';


import './Header.css';



const Header = (props) => (
  <div className="header">
    <div className="header-content">
      {props.mode ? <DashboardNav /> :  <NavBar/>}
     
    </div>
  </div>
  
  

)

export default Header;