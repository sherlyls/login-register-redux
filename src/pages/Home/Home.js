import React from 'react';
// import './gambar.jpg';
import logo from '../../img/gambar.jpeg'; // with import
import './home.css';


function Home() {
    return(
        <div>
            <h1>Welcome to My Website</h1>
            <img src={logo} />
        </div>
    )
}

export default Home;