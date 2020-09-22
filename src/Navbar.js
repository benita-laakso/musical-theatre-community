import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
            <nav>
            <ul>
                <li>
                <Link to="/">home</Link>
                </li>
                <li>
                <Link to="/tikets">tikets</Link>
                </li>
            </ul>
            <ul className="ul_2 ">
                <li>
                <Link to="/artists">artists</Link>
                </li>
                <li>
                <Link to="/apply">apply</Link>
                </li>
            </ul>
            </nav>
    );
  }
  export default Navbar;