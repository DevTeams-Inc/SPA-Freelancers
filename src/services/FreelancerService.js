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

}

export default FreelancerService