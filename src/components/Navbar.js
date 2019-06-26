import React, { useContext } from 'react'
import {BookContext} from "../contexts/BookContext";

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Book List</h1>
            <p>You have { books.length } books</p>
        </div>
    )
}

export default Navbar