import React, { createContext, useReducer } from 'react'
import { bookReducer } from "../reducers/bookReducer";
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[
        {title: 'Harry Potter and Philosopher Stone', id: 1, author: 'J.K. Rowling'},
        {title: 'Harry Potter and Chamber of Secrets', id: 2, author: 'J.K. Rowling'},
        {title: 'Harry Potter and Prisoner of Azkaban', id: 3, author: 'J.K. Rowling'},
        {title: 'Harry Potter and Goblet of Fire', id: 4, author: 'J.K. Rowling'},
        {title: 'Harry Potter and Order of Phoenix', id: 5, author: 'J.K. Rowling'},
        {title: 'Harry Potter and Half-Blood Prince', id: 6, author: 'J.K. Rowling'},
        {title: 'Harry Potter and Deathly Hallows', id: 7, author: 'J.K. Rowling'},
    ])

    // const addBook = (title, author) => {
    //     setBooks([...books, {title: title, author: author, id: uuid()}])
    // }
    //
    // const removeBook = id => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider

