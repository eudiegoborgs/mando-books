import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import { BookCard } from '../../molecules/book-card'
import { Grid } from '@material-ui/core'
import ApiClient from '../../../services/client/api'

const style = css `
`;

const apiClient = new ApiClient()

export const BooksList = () => {
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        const result = await apiClient.getBooksList()
        setBooks(result)
    }

    useEffect(() => {
        getBooks()
    }, [])
    return books.map(item => (
        <Grid item xs={4}>
            <BookCard 
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                amount={item.amount}
            />
        </Grid>
    ))
}
