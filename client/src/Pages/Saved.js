import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import API from '../utils/API'



class SavedPage extends Component {
    state = {
        SavedBooks: []
    }
    componentDidMount = () => {
       this.loadBooks();
        // console.log(this.state.SavedBooks)
    }

    loadBooks = () => {

        API.getSavedBooks().then(res => {
            this.setState({ SavedBooks: res.data })
            console.log(this.state.SavedBooks)


        })
    }
     delete = (e) => {
        
        API.deleteBook(e.target.id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }

    render() {
        return (
            <div>
                {this.state.SavedBooks.length > 0 ? (this.state.SavedBooks.map(book => {


                    return (

                        <div key={book.id} className="BookCard mb-3 ml-auto mr-auto">
                            <h1><img height="150px" width="100px" alt={book.title + "cover thumbnial"} src={book.thumbnail} />{book.title}</h1>
                            <p className="ml-auto mr-auto">Authors:{book.author}</p>
                            <p>{book.description}</p> 

                            {/* <p>Check this book out <a href={book.link}>here</a>!</p> */}
                            <Button onClick={this.delete} id={book.id} variant="danger">X</Button>
    </div>
)
})) : (<div>
                                <h1>No results yet! Keep trying though!</h1>
                            </div>)}


                        </div>
                    )
                }


}

export default SavedPage