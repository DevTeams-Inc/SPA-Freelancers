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
}

export default CategoryService