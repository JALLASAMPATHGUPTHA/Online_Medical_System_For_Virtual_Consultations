import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Facilities from './Facilities';
import Login from './Login';
import OurTeam from './OurTeam';
import Pacakages from './Pacakages';
import Service from './Service';
 import './MainNavBar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainNavBar()
{
    return (
        <div>
            <ul className='navbar'>
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/About">About</Link></li> 
            <li><Link to="/Facilities">Facilities</Link></li> 
            <li><Link to="/OurTeam">OurTeam</Link></li> 
            <li><Link to="/Service">Sevice</Link></li> 
            <li><Link to="/Pacakages">Pacakages</Link></li> 
            <li><Link to="/Login">Login</Link></li> 
            </ul>

            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/Facilities' Component={Facilities}/>
                <Route path='/Login' Component={Login}/>
                <Route path='/OurTeam' Component={OurTeam}/>
                <Route path='/Pacakages' Component={Pacakages}/>
                <Route path='/Service' Component={Service}/>

            </Routes>

        </div>
    );
};


