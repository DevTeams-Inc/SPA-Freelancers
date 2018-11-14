class AuthService{
    axios
    apiUrl
    constructor(axios,apiUrl){
        this.axios = axios;
        this.apiUrl = `${apiUrl}api/accounts`;
        //recordar colocar esto en cada servicio
        // this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    }

    login(user){
        let self = this
        return self.axios.post(`${self.apiUrl}/login` , user)
    }

    logout(tokenName, tokenUserName){
        //removemos del localStorage
       localStorage.removeItem(tokenName)
       localStorage.removeItem(tokenUserName)
       return true
    }

    register(model){
        let self = this;
        return self.axios.post(`${self.apiUrl}/create`, model)
    }

    email(id){
        let self = this;
        return self.axios.get(`${self.apiUrl}/email?key=${id}`)
    }

}

export default AuthService