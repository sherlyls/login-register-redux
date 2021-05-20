const initialState = {
    users:'',
    message: '',
    loading: true,
    isLogin: localStorage.getItem('token') ? true : false,
    isAuthenticated: false
};

export default function (state = initialState, action) {
    const {type, payload} = action;
    
    switch (type) {
        case "GET_USERS_SUCCESS":
            localStorage.setItem('isLogin', true);
            console.log(payload, "lihat")
            localStorage.setItem('token', payload.data.token)
            return {
                ...state,
                message: payload.messages,
                users: payload.data,
                loading: false,
                isLogin: true,
                isAuthenticated: localStorage.getItem('token') ? true : false,

            }
            case "GET_USERS_FAIL":
                localStorage.setItem('isLogin', false);
                return {
                    ...state,
                    message: payload.messages,
                    loading: false,
                    isLogin: false,
                }
            case "CLEAR":
                localStorage.setItem('isLogin', false);
                return {
                    users: "",
                    loading: true,
                    isLogin: false,  
                }
            default:
                return state;
    }
}