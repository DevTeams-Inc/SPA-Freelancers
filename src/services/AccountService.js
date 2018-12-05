class AccountService {
  axios;
  apiUrl;

  constructor(axios, apiUrl) {
    this.axios = axios;
    this.apiUrl = `${apiUrl}api/accounts`;
  }

  getAll() {
    return this.axios.get(`${this.apiUrl}/getall`);
  }
  exist(id){
    return this.axios.get(`${this.apiUrl}/exist/${id}`)
  }

  submitImg(file) {
    return this.axios
        .post(`${this.apiUrl}/img/upload`, file , {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
  }
}

export default AccountService;
