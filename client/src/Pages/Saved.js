import React, {Component} from 'react'
import API from '../utils/API'
import Button from 'react-bootstrap/Button'



class SavedPage extends Component {
state = {
    SavedBooks: []
}
componentDidMount = () => {
    API.getSavedBooks().then(res => {
        // this.setState({SavedBooks: res.data})
        console.log(res.data)
    
    
    })
    console.log(this.state.SavedBooks)
}

render(){
    return (
    <div>
         {this.state.SavedBooks.length > 0 ? (this.state.SavedBooks.map(book => {


return (

    <div key={book.id} className="BookCard mb-3 ml-auto mr-auto">
        <h1><img height="150px" width="100px" alt={book.title + "cover thumbnial"} src={book.imageLinks.thumbnail} />{book.title}</h1>
        <p className="ml-auto mr-auto">Authors:{book.author}</p>
        <p>Description: {book.description}</p>

        {/* <p>Check this book out <a href={book.volumeInfo.infoLink}>here</a>!</p> */}
        <Button onClick={this.Find} id={book.id}>Save</Button>
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