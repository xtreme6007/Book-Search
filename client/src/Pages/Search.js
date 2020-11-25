import React, { Component } from 'react'

import SearchBar from '../Components/SearchBar'
import API from '../utils/API'




class SearchPage extends Component {
     

    state ={
        result: [],
        query: "Welcome"

    }
    componentDidMount() {
        this.Search(this.state.query)
      }

   

        Search(query){
            API.getBooks(query).then(res => {
                console.log(this.state.query);
                console.log(this.state.result);
                console.log(res.data.items)
                
                this.setState(
                    { result: res.data.items }
                )
            })

        }

         handleSearchChange = (event) => {

             this.setState( {...this.state, query: event.target.value}) 
             this.Search(this.state.query)



        }

    render() {

        




        return (
            <div>
                <SearchBar handleSearchChange={this.handleSearchChange} />
                <div>
                    {this.state.result.length > 0 ? (this.state.result.map(book => {
                        console.log("Theres something")

                        return (
                            <div>
                                <h1>{book.volumeInfo.title}</h1>
                                {book.volumeInfo.authours}
                                {book.volumeInfo.description}
                                {book.imageLinks.thumbnail}
                                {book.infoLink}
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