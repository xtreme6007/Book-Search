import React, { Component } from 'react'


import SearchBar from '../Components/SearchBar'
import API from '../utils/API'
import Button from 'react-bootstrap/Button'
import './Search.css'




class SearchPage extends Component {
     

    state ={
        result: [],
        query: "Preston Nichols"

    }
    componentDidMount() {
        this.Search(this.state.query)
      }

   

        Search(query){
            API.getBooks(query).then(res => {
                
                
                this.setState(
                    { result: [...res.data.items] }
                )
                console.log(this.state.result);
            })

        }

         handleSearchChange = (event) => {

             this.setState( { query: event.target.value}) 
             



        }

        SearchButtonClick = () => {
            this.Search(this.state.query)
        }


        Save = (e) =>{
            e.preventDefault();
           

             API.findBooks(e.target.id).then(res => { 
            API.saveBook(
                {  id: res.data.id,
                    title: res.data.volumeInfo.title,
                    authour: res.data.volumeInfo.author,
                    description: res.data.volumeInfo.description
                    
                }

            )
                
        })
        }

    render() {

        




        return (
            <div>
                <SearchBar  handleSearchChange={this.handleSearchChange}/>
                <Button onClick={this.SearchButtonClick}>Search</Button>
                
                <div>
                    {this.state.result.length > 0 ? (this.state.result.map(book => {
                        

                        return (
                            
                            <div key={book.id} className="BookCard mb-3 ml-auto mr-auto">
                                <h1><img height="150px" width="100px" alt={book.volumeInfo.title + "cover thumbnial"} src={book.volumeInfo.imageLinks.thumbnail} />{book.volumeInfo.title}</h1>
                                <p className="ml-auto mr-auto">Authors:{book.volumeInfo.authors}</p>
                                <p>Description: {book.volumeInfo.description}</p>
                                
                                <p>Check this book out <a href={book.volumeInfo.infoLink}>here</a>!</p>
                                <Button onClick={this.Save} id={book.id}>Save</Button>
                            </div>
                        )
                    })) : (<div>
                        <h1>No results yet! Keep trying though!</h1>
                    </div>)}

                </div>
            </div>
        )




    }
}

export default SearchPage