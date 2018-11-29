class AccountService {

    axios
    apiUrl

    constructor(axios,apiUrl){
        this.axios = axios
        this.apiUrl = `${apiUrl}api/accounts`
    }
    
    getAll(){
        return this.axios.get(`${this.apiUrl}/getall`);
    
    }
}

export default AccountService