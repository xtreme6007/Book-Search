import React from 'react'
import Form from 'react-bootstrap/Form'




function SearchBar({ handleSearchChange }) {



  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label htmlfor="QuerySearch">Search:</Form.Label>
          <Form.Control
            as="input"
            id="querrySearch"
            type="text"
            placeholder="Enter Search Query Here"
            onChange={e => handleSearchChange(e)}

          />
         
        </Form.Group>


      </Form>

    </div>

  )




}
export default SearchBar