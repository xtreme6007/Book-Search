import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../utils/API.js'


function SearchBar({}){

   const state = {
        result: [],
        filteredResults: [],
        
        query: "",
        sorted: false

    };
    
    function Search(query) {
        API.getBooks(query).then(res => {
            console.log(res.data.items);
            this.setState({
                result: res.data.items
                
            })
        })

    }

    function handleSearchChange(event) {

        let query = event.target.value
        Search(query);



    }

    return(
        <div>
          <Form>
            <Form.Group>
            <Form.Label htmlfor="QuerySearch">Search:</Form.Label>
            <Form.Control
            as="input"
            id="querrySearch"
            type="text"
            placeholder= "Enter Search Querry Here"
            onChange={e => handleSearchChange(e)}
            
            />
            <Button variant="primary" type="submit">
    Search
  </Button>
            </Form.Group>
            

          </Form>

        </div>

    )




}
export default SearchBar