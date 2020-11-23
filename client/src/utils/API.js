import axios from "axios";


const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="



const API = (query) => {
  getBooks:  {
    return axios.get
    (BaseUrl+ query)
    
  }
  
};
export default API
