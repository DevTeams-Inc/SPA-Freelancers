import Axios from 'axios'
import AuthService from "@/services/AuthService";
import FreelancerService from '../services/FreelancerService';
import HomeService from '../services/HomeService';

//Axios configuration
Axios.defaults.headers.common.Accept = "application/json";

// let apiUrl = "http://192.168.1.139:45455/";
//local
let apiUrl = "http://192.168.1.139:45455/";


export default {
  authService: new AuthService(Axios, apiUrl),
  freelancerService: new FreelancerService(Axios, apiUrl),
  homeService: new HomeService(Axios , apiUrl)
};