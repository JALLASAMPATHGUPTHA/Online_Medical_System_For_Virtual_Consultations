import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Apponiment from './Apponiment';
import Patientdetails from './Patientdetails';
import Prescription from './Prescription';
import './doctor.css';


export default function Navbar()
{
    return (
        <div>
            <ul className='navbar'>
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/Apponiment">Appointment</Link></li> 
            <li><Link to="/Patientdetails">Patientdetails</Link></li> 
            <li><Link to="/Prescription">Prescription</Link></li>
             
            
            </ul>

            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/Apponiment' Component={Apponiment}/>
                <Route path='/Patientdetails' Component={Patientdetails}/>
                <Route path='/Prescription' Component={Prescription}/>
                
            </Routes>

        </div>
    );
};


