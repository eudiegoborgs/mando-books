import React from 'react';
import { css } from '@emotion/css'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const style = css `
    .media {
        height: 140px;
    }

    .action {
        width: inherit;
        margin-left: auto;
    }
`;

export const BookCard = ({id, title, image, description, amount}) => (
    <Card className={style} id={`book-card-${id}`}>
        <CardActionArea>
            <CardMedia
                className="media"
                image={image}
                title={title}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" id={`book-card-title-${id}`}>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" id={`book-card-amount-${id}`}>
                    Quantidade: {amount}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <div className="action">
                <Button href={`/book/${id}`} component="a" size="small" color="primary" id={`book-card-see-more-${id}`}>
                    Veja mais
                </Button>
                <Button size="small" color="primary" variant="contained" startIcon={<ShoppingCartIcon />} id={`book-card-share-${id}`}>
                    Pegar
                </Button>
            </div>
        </CardActions>
    </Card>
)
