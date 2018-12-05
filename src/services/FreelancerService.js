class FreelancerService{

    axios
    apiUrl
    autenticacion

    constructor(axios,apiUrl){
        this.axios = axios
        this.apiUrl = `${apiUrl}api/freelancers`
        //this.autenticacion = this.axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("access_token")
    }

    getAll(page) {
      //  this.autenticacion
        return this.axios.get(`${this.apiUrl}/getall/${page}`)
    }

    getById(id){
        return this.axios.get(`${this.apiUrl}/getuser/${id}`)
    }
    getByIdFreelancer(id){
        return this.axios.get(`${this.apiUrl}/edit/${id}`)
    }

    search(query){
        return this.axios.get(`${this.apiUrl}/search?query=${query}`)
    }

    filter(idHability,rate){
        return this.axios.get(`${this.apiUrl}/filter?idHability=${idHability}&rate=${rate}`)
    }

    add(model){
        return this.axios.post(`${this.apiUrl}`,model);
      }
    update(model){
        return this.axios.put(`${this.apiUrl}`,model);
    }

    //Request Admin
    getAdmin(){
        return this.axios.get(`${this.apiUrl}/admin/getall`);
    }
    
    remove(id){
        return this.axios.delete(`${this.apiUrl}/${id}`)
    }

    getMap(){
        return this.axios.get(`${this.apiUrl}/map`)
    }
    
    deleteHability(model){
        return this.axios.post(`${this.apiUrl}/delete/hability`,model);
    }

    userExist(id){
        return this.axios.get(`${this.apiUrl}/exist/${id}`)
    }


}

export default FreelancerService