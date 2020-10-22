import React, { useState, useEffect } from 'react';
import "../App/App.css";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {

    const [hasBackground, setBackground] = useState(false);

    const setBackgroundFunction = () => {
        var heroComponent = document.querySelector(".hero");
        if(!heroComponent){
            return;
        }
        var bottomOfTheHeroComponent = heroComponent.getBoundingClientRect().bottom;
        if(bottomOfTheHeroComponent <= 40){ 
            // its above the top of the screen
            setBackground(true);
        }else{
            setBackground(false);
        }
    }

    useEffect(() => {
        // on scroll call the function
        window.addEventListener("scroll", setBackgroundFunction, {passive: true})
        return () => {
            window.removeEventListener("scroll", setBackgroundFunction);
        };
    });

    return (
        <nav className={hasBackground ? "colored" : ""} >
        <ul>
            <li>
            <Link to="/">home</Link>
            </li>
            <li>
            <Link to="/tickets">tickets</Link>
            </li>
        </ul>
        <ul className="ul_2 ">
            <li>
            <Link to="/artists">artists</Link>
            </li>
            <li>
            <Link to="/shows">shows</Link>
            </li>
        </ul>
        </nav>
    );
  }
  export default Navbar;