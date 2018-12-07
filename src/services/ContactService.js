class ContactService{
  axios
  apiUrl

  constructor(axios,apiUrl){
      this.axios=axios;
      this.apiUrl=`${apiUrl}api/contact`;
    }

    getContactInterested(id){
       return this.axios.get(`${this.apiUrl}/contacted/${id}`);
    }
    getContacted(id){
       return this.axios.get(`${this.apiUrl}/contactme/${id}`);
    }
    contactInterestedDescart(id){
       return this.axios.delete(`${this.apiUrl}/${id}`);
    }
    exist(model){
      return this.axios.post(`${this.apiUrl}`,model);
  }
  
}
export default ContactService