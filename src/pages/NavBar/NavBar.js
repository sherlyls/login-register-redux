import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {connect} from "react-redux";
import photo from '../../img/photo-profile.jpg'



function NavBar({login} ) {
    // const login = props.login
    // const {login} = props
    
    const {isLogin} = login
    const [show, setShow] = useState(localStorage.getItem('isLogin'))

    console.log(isLogin, 'TESTING')
    // console.log
    // useEffect(()=> {
    //     const a = localStorage.getItem('isLogin')
    //     setShow(a);
    //     console.log(a, "tes");
        
    //   }, [])


    return(
          
        <nav>
            <ul>
               
                
                {isLogin === true ? <> <li><Link to="/">Home</Link></li>
               <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Project</Link>  </li></> :
                <div>
                    <li><Link to="/login">Login</Link>  </li>
                    <li><Link to="/register">Register</Link>  </li>
                </div>
        } 
                
                    
            </ul>
        </nav>
                   )
}

const mapStateToProps = (state) => ({
    login : state.login
});


export default connect(mapStateToProps)(NavBar);