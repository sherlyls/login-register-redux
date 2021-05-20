import {API} from "../../config/API"

export const getUser = (name, email) => async(dispatch) => {
    try {
        const body = {
            name: name,
            email: email
        }

        const res = await API.post("/login", body)
        console.log(res.data.data, "test");
        
        dispatch({
            type: "GET_USERS_SUCCESS",
            payload: res.data,
        });
    }catch(err) {
        dispatch({
            type: "GET_USERS_FAIL",
            payload: err.response.data
        })
    }
}