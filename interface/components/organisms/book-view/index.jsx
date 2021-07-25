import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ApiClient from '../../../services/client/api'

const style=css `
    display: flex;
    width: 100%;
    .media {
        width: 50%;
        height: 500px;
    }
    .content{
        width: 50%;
        height: 100%;
    }

    button {
        margin-left: auto;
    }
`;

const apiClient = new ApiClient()

export const BookView = ({id}) => {
    const [book, setBook] = useState([])

    const getBook = async () => {
        const result = await apiClient.getBook(id)
        setBook(result)
    }

    useEffect(() => {
        if (id) {
            getBook()
        }
    }, [id])

    if (!book) {
        return null
    }

    const {title, image, description, amount} = book
    return (
        <Card className={style}>
            <CardMedia
                className="media"
                image={image}
                title={title}
                />
            <CardContent className="content">
                <Typography variant="h3" component="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography component="p">
                    ID: {id}
                </Typography>
                <Typography component="small">
                    Disponiveis: {amount}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <CardActions>
                    <Button size="large" color="primary" variant="contained" startIcon={<ShoppingCartIcon />}>
                        Pegar
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
