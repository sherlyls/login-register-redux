import React from 'react';
// import './gambar.jpg';
import logo from '../../img/gambar.jpeg'; // with import
import '../Home/home.css';


function A() {
    return(
        <div>
            <h1>Welcome to My home</h1>
            <img src={logo} />
        </div>
    )
}

export default A;