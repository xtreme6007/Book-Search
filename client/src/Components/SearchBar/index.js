import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



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
          <Button variant="primary" type="submit">
            Search
  </Button>
        </Form.Group>


      </Form>

    </div>

  )




}
export default SearchBar