import React, {useState} from 'react'
import SearchBar from '../Components/SearchBar'
import API from '../utils/API'


function SearchPage() {

    const [resultState, setResultState] = useState([]);
    

    
    function Search(query) {
        API.getBooks(query).then(res => {
            console.log(res.data.items);
            setResultState({
                result: res.data.items
                
            })
        })

    }

    const  handleSearchChange = (event) => {

        let query = event.target.value
        Search(query);



    }

    return (
    <div>
        <SearchBar handleSearchChange={handleSearchChange}/>
    
        {resultState.length > 0 ? (resultState.map(book => {

            return (
                <div>
                {book.volumeInfo.title}
                {book.volumeInfo.authours}
                {book.volumeInfo.description}
                {book.imageLinks.thumbnail}
                {book.infolLink}
                </div>
            )
        })): (<div></div>)}


    </div>
    )



}

export default SearchPage