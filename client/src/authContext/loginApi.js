import axios from "axios";
import { BASE_URL } from "../constants";
import { loginFailure, loginSuccess, loginStart } from "./AuthActions";


const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${BASE_URL}/auth/login/`, user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}


export default login;