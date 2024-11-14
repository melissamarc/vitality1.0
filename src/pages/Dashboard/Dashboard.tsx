import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import DisplayDate from '../../components/DisplayDate/DisplayDate';
import Sidebar from '../../components/sidebar/sidebar';
import { UserMenu } from '../../components/userMenu/userMenu';


const Dashboard: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="side"> <Sidebar /> </div>
       
         
           
        
            <div className="user">
              <UserMenu />
       
        </div>
      </div>
      
    </>
  );
};

export default Dashboard;
