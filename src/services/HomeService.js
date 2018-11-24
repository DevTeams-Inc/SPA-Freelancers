class HomeService {

    axios
    apiUrl
    constructor(axios , apiUrl){
        this.axios = axios
        this.apiUrl = `${apiUrl}api/`
    }

    getCategories(){
        let self = this
        return self.axios.get(`${self.apiUrl}/categories/home`);
    }
    getFreelancers() {
        let self = this
        return self.axios.get(`${self.apiUrl}/freelancers/home`);
    }
}

export default HomeService