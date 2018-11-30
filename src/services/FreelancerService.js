class FreelancerService{

    axios
    apiUrl

    constructor(axios,apiUrl){
        this.axios = axios
        this.apiUrl = `${apiUrl}api/freelancers`
    }

    getAll(page) {
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
    
    deleteHability(model){
        return this.axios.post(`${this.apiUrl}/delete/hability`,model);
    }
}

export default FreelancerService