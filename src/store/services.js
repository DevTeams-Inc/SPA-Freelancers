import Axios from 'axios'
import AuthService from "@/services/AuthService";
import FreelancerService from '../services/FreelancerService';
import HomeService from '../services/HomeService';
import HabilityService from '../services/HabilityService';
import AccountService from '../services/AccountService';
import ProyectService from  '../services/ProyectService';
import CategoryService from '../services/CategoryService';

//Axios configuration
Axios.defaults.headers.common.Accept = "application/json";

//residencia
let apiUrl = "http://192.168.96.117:45456/";
//devteams
<<<<<<< HEAD
//let apiUrl = "http://192.168.1.139:45455/";
=======
// let apiUrl = "http://192.168.1.139:45455/";
// let apiUrl = "http://192.168.96.117:45455/";
>>>>>>> d0a4b985409ec0da9322557eecc4cb8235292ded
//local
 let apiUrl = "http://localhost:57455/";


export default {
  authService: new AuthService(Axios, apiUrl),
  freelancerService: new FreelancerService(Axios, apiUrl),
  homeService: new HomeService(Axios , apiUrl),
  habilityService: new HabilityService(Axios , apiUrl),
  accountService: new AccountService(Axios, apiUrl),
  proyectService:new ProyectService(Axios,apiUrl),
  categoryService: new CategoryService(Axios,apiUrl)
};