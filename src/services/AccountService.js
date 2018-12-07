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
  exist(id) {
    return this.axios.get(`${this.apiUrl}/exist/${id}`);
  }

  recoveryPass(email){
    return this.axios.post(`${this.apiUrl}/pass/recovery`,email);
  }

  changePass(model){
    return this.axios.post(`${this.apiUrl}/pass/change`,model);
  }

  submitImg(file) {
    return this.axios.post(`${this.apiUrl}/img/upload`, file, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
}

export default AccountService;
