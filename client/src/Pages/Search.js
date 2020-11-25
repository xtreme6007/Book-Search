import React, { useState, Component } from 'react'

import SearchBar from '../Components/SearchBar'
import API from '../utils/API'




class SearchPage extends Component {

    render() {

        const [resultState, setResultState] = useState([]);

        const Search = (query) => {
            API.getBooks(query).then(res => {
                console.log(res.data.items);
                console.log(resultState)
                setResultState(
                    { resultState: res.data.items }
                )
            })

        }

        const handleSearchChange = (event) => {

            let query = event.target.value
            Search(query);



        }




        return (
            <div>
                <SearchBar handleSearchChange={handleSearchChange} />
                <div>
                    {resultState.length > 0 ? (resultState.map(book => {
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
                    })) : (<div></div>)}

                </div>
            </div>
        )




    }
}

export default SearchPage