import React from 'react'

import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function Navigation() {

    return (
        <div>
            <NavBar bg="dark">
                <Nav>
                    <Nav.Link href="/saved">Saved Books</Nav.Link>
                    <Nav.Link href="/">Find Something New</Nav.Link>


                    
                </Nav>
            </NavBar>
        </div>
    )


}
export default Navigation