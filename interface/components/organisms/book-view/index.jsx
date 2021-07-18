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

const style=css `
    display: flex;
    .media {
        width: 70vw;
        height: auto;
    }

    button {
        margin-left: auto;
    }
`;

export const BookView = ({id}) => {
    const data = {
        title: 'Arquitetura Limpa',
        description: 'As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers Código Limpo e O Codificador Limpo, o lendário artesão de software Robert C...',
        image: 'https://pbs.twimg.com/media/EWyU7aPXYAAmV9R.jpg:large'
    }
    const {title, image, description} = data
    return (
        <Card className={style}>
            <CardMedia
                className="media"
                image={image}
                title={title}
                />
            <CardContent>
                <Typography variant="h3" component="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography component="small">
                    ID: {id}
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
