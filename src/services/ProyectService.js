class ProyectService{
    axios
    apiUrl
    constructor(axios, apiUrl){
        this.axios=axios;
        this.apiUrl=`${apiUrl}api/proyects`;
    }

    add(model){
        return this.axios.post(`${this.apiUrl}`,model);
    }
}
export default ProyectService