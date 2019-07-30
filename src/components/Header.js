import React, { Component } from 'react';
import logo from '../assets/images/stackline-logo.png';
import '../styles/header.css';



class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img src={logo} alt="logo"/>

                </div>
            </div>
        )
    }
}

export default Header;