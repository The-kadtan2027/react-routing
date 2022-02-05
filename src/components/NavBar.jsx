import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{



    return (
        <div className="Nav">
            <Link to={'/'} >Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/project'}>Projects</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    )
}

export default NavBar;