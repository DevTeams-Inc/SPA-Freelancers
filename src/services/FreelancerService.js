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
    add(model , file){
        return this.axios.post(`${this.apiUrl}`,model , file);
      }

}

export default FreelancerService