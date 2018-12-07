class AdminService{
  axios;
  apiUrl;

  constructor(axios, apiUrl) {
    this.axios = axios;
    this.apiUrl = `${apiUrl}api/admin`;
  }

  countFreelancer(){
    
    return this.axios.get(`${this.apiUrl}/freelancers/count`);
  
  }
 
  countProyects(){
    
    return this.axios.get(`${this.apiUrl}/proyects/count`);
  
  }

  countCategory(){
    
    return this.axios.get(`${this.apiUrl}/category/count`);
  
  }

  countHability(){
    
    return this.axios.get(`${this.apiUrl}/hability/count`);
  
  }

  
  topFreelancer() {

    return this.axios.get(`${this.apiUrl}/best/freelancer`)

   }

  





}

export default AdminService