class CategoryService {
    
    axios
    apiUrl

    constructor(axios,apiUrl){
        this.axios = axios
        this.apiUrl = `${apiUrl}api/categories`
    }
    
    getAll(){
        return this.axios.get(`${this.apiUrl}`);
    
    }

    add(model){
        return this.axios.post(`${this.apiUrl}`,model)
    }
    
    remove(id){
        return this.axios.delete(`${this.apiUrl}/${id}`)
    }

    getById(id){
        return this.axios.get(`${this.apiUrl}/${id}`)
    }

    edit(model){
        return this.axios.put(`${this.apiUrl}`,model)
    }



}

export default CategoryService