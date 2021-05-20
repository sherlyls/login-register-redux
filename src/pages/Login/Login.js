import React, {useState} from 'react'
import {getUser} from "../../redux/actions/login"
import {connect} from "react-redux"
import {useDispatch} from "react-redux"
import photo from '../../img/photo-profile.jpg'
import './login.css'


const Login = ({getUser, login}) => {

    const dispatch = useDispatch()

    const {users,loading,message} = login
    
    const [username, setName] = useState("sherly")
    const [email, setEmail] = useState("sherly@gmail.com")

    const OnClick = () => {
        getUser(username, email)
    }

    // const Clear = () => {
    //     dispatch({
    //         type:"CLEAR"
    //     })
    // }

   
    return (
        <div>

            <h1>Redux Login</h1>
            <div>
                <input placeholder = "Name" value ={username} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input placeholder = "Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <button onClick = {() => OnClick()}>SUBMIT</button> 
            </div>

            {loading == true? <h1>Isi nama dan email lalu submit</h1>:
            <div>
                <div>
                    <h5>{users._id}</h5>
                </div>
                <div>
                    <h5>{users.username}</h5>
                </div>
                <div>
                    <h5>{users.email}</h5>
                </div>
                {/* <div>
                     <img src={photo} />
                </div> */}
                {/* <button onClick={Clear}>Clear data</button> */}
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    login : state.login
});

export default connect(mapStateToProps, {getUser})(Login);

