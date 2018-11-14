import Axios from 'axios'
import AuthService from "@/services/AuthService";

//Axios configuration
Axios.defaults.headers.common.Accept = "application/json";

let apiUrl = "http://192.168.99.169:45455/";

export default {
    authService: new AuthService(Axios, apiUrl)
};