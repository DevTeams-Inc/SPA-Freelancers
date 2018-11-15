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

}

export default FreelancerService