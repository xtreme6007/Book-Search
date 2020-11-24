import axios from "axios";


const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="



export default {
  getBooks: function (query) {
    return axios.get
    (BaseUrl+ query);  
  }
  
};

