import React, { Component } from 'react'

import SearchBar from '../Components/SearchBar'
import API from '../utils/API'
import Button from 'react-bootstrap/Button'




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
                
                console.log(res.data.items)
                
                this.setState(
                    { result: [...res.data.items] }
                )
                console.log(this.state.result);
            })

        }

         handleSearchChange = (event) => {

             this.setState( { query: event.target.value}) 
             



        }

        ButtonClick = () => {
            this.Search(this.state.query)
        }


        save = () =>{


        }

    render() {

        




        return (
            <div>
                <SearchBar  handleSearchChange={this.handleSearchChange}/>
                <Button onClick={this.ButtonClick}>Search</Button>
                <div>
                    {this.state.result.length > 0 ? (this.state.result.map(book => {
                        console.log(book.volumeInfo.title)

                        return (
                            <div key={book.id}>
                                <h1>{book.volumeInfo.title}</h1>
                                <p>{book.volumeInfo.authours}</p>
                                <p>{book.volumeInfo.description}</p>
                                <p>{book.volumeInfo.imageLinks.thumbnail}</p>
                                <p><a href={book.infoLink}>{book.infoLink}</a></p>
                                <Button onClick={this.Save}>Save</Button>
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