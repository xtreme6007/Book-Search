import axios from "axios";


const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="




export default {
  getBooks: function (query) {
    return axios.get(BaseUrl+ query);  
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  findBooks: function(id) {
    const FindUrl = "https://www.googleapis.com/books/v1/volumes/" + id +"?apikey=AIzaSyCYK1IWf_G-d3M_wlYMwE1LM-YE4ZjeWH8"
   
    return axios.get(FindUrl);
  },
  getSavedBooks: function () {
    return axios.get("/api/books")
  }
  
};

