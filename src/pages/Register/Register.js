import React, {useState, useEffect, useReff } from 'react'
import {connect} from "react-redux"
import {useDispatch} from "react-redux"

import {SignUp} from "../../redux/actions/register"

const Registerpage = ({SignUp, register}) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()

    const {loading, message} = register


    const OnClick = () => {
        SignUp(username, email)
    }

    const clearMessage = () => {
        dispatch ({
            type: "CLEAR_MESSAGE"
        })
    }

    useEffect(() => {
        setTimeout(() => {
            clearMessage();
        }, 5000); 
  }, [message]);


      
        return (
        
        <div>
            <h1>Register Here</h1>

            <div>
                <input placeholder = "Name" value ={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <input placeholder = "Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
            </div>    
            <div>
            <button onClick={() => OnClick()} >Submit</button>
            </div>

            {loading == true ? <h1>{}</h1> : 
            <h1>{message}</h1> }          
            
        </div>
    )
}



const mapStateToProps = (state) => ({
    register : state.register
});

export default connect(mapStateToProps, {SignUp})(Registerpage);
