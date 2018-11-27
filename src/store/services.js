import Axios from 'axios'
import AuthService from "@/services/AuthService";
import FreelancerService from '../services/FreelancerService';
import HomeService from '../services/HomeService';
import HabilityService from '../services/HabilityService'

//Axios configuration
Axios.defaults.headers.common.Accept = "application/json";

// let apiUrl = "http://192.168.1.139:45455/";
//local
let apiUrl = "http://localhost:57455/";


export default {
  authService: new AuthService(Axios, apiUrl),
  freelancerService: new FreelancerService(Axios, apiUrl),
  homeService: new HomeService(Axios , apiUrl),
  habilityService: new HabilityService(Axios , apiUrl)
};