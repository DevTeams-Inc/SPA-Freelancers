class ProyectService{
    axios
    apiUrl

        constructor(axios, apiUrl){
        this.axios = axios;
        this.apiUrl =`${apiUrl}api/proyects`;
    }

    add(model){
        return this.axios.post(`${this.apiUrl}`,model);
    }

    getAll() {
        return this.axios.get(`${this.apiUrl}/admin/getall`)
    }

    remove(id){
        return this.axios.delete(`${this.apiUrl}/${id}`)
    }

    getAllProyects(){
        return this.axios.get(`${this.apiUrl}`)
    }

}
export default ProyectService