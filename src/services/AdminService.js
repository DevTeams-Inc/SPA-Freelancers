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


  countCategory(){
    
    return this.axios.get(`${this.apiUrl}/category/count`);
  
  }

  countHability(){
    
    return this.axios.get(`${this.apiUrl}/hability/count`);
  
  }
  // hability


  // category


  countProyects(){
    
    return this.axios.get(`${this.apiUrl}/proyects/count`);
  
  }

  





}

export default AdminService