class RatingsService{
    axios
    apiUrl

        constructor(axios, apiUrl){
        this.axios = axios;
        this.apiUrl =`${apiUrl}api/ratings`;
    }

    add(model){
        return this.axios.post(`${this.apiUrl}`,model);
    }
    getAllRating(id){
        return this.axios.get(`${this.apiUrl}/${id}`);
    }



}
export default RatingsService