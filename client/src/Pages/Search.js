import React, { Component } from 'react'


import SearchBar from '../Components/SearchBar'
import API from '../utils/API'
import Button from 'react-bootstrap/Button'
import './Search.css'




class SearchPage extends Component {


    state = {
        result: [],
        query: ""

    }
    componentDidMount() {
        // this.Search(this.state.query)
    }



    Search(query) {
        API.getBooks(query).then(res => {


            this.setState(
                { result: [...res.data.items] }
            )
            console.log(this.state.result);
        }).catch(err => {console.log(err)})

    }

    handleSearchChange = (event) => {

        this.setState({ query: event.target.value })




    }

    SearchButtonClick = () => {
        this.Search(this.state.query)
    }

    Save = (res) => {
        console.log(res)

        API.saveBook(

            {
                id: res.data.id,
                title: res.data.volumeInfo.title,
                author: res.data.volumeInfo.authors[0],
                description: res.data.volumeInfo.description,
                thumbnail: res.data.volumeInfo.imageLinks.thumbnail,
                link: res.data.volumeInfo.infoLink

            }
        )
    }


    Find = (e) => {
        e.preventDefault();


        API.findBooks(e.target.id).then(res => {

            this.Save(res);


        }).catch(err => {console.log(err)})
    }

    render() {






        return (
            <div>
                <SearchBar handleSearchChange={this.handleSearchChange} />
                <Button onClick={this.SearchButtonClick}>Search</Button>

                <div>
                    {this.state.result.length > 0 ? (this.state.result.map(book => {


                        return (

                            <div key={book.id} className="BookCard mb-3 ml-auto mr-auto">
                                <h1><img height="150px" width="100px" alt={book.volumeInfo.title + "cover thumbnial"} src={book.volumeInfo.imageLinks.smallThumbnail} /></h1>
                                <h1>{book.volumeInfo.title}</h1>
                                <p className="ml-auto mr-auto">Authors:{book.volumeInfo.authors}</p>
                                <p>Description: {book.volumeInfo.description}</p>

                                <p>Check this book out <a href={book.volumeInfo.infoLink}>here</a>!</p>
                                <Button onClick={this.Find} id={book.id}>Save</Button>
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