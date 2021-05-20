import {API} from "../../config/API"

 
export const SignUp = (name, email) => async(dispatch) => {
    try {
        const body = {
            name: name,
            email: email,
            
        }

        const res = await API.post("/register", body)
        console.log(res.data, "test");
        
        dispatch({
            type: "USERS_CREATE",
            payload: res.data
        });
  
        
    }catch(err) {
        
        
    }
}