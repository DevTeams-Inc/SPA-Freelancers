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

    search(query){
        return this.axios.get(`${this.apiUrl}/search?query=${query}`)
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
<<<<<<< HEAD

    sendMessage(model){
        return this.axios.post(`${this.apiUrl}/contact`, model)
=======
    
    deleteHability(model){
        return this.axios.post(`${this.apiUrl}/delete/hability`,model);
>>>>>>> 3ebe08ebf88d16bf19b21d975e48b382be101fbe
    }
}

export default FreelancerService