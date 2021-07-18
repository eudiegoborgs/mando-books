import React from 'react';
import { css } from '@emotion/css'
import { BookCard } from '../../molecules/book-card';
import { Grid } from '@material-ui/core';

const style = css `
`;

export const BooksList = () => (
    <Grid container spacing={3} className={style}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
            <Grid item xs={4}>
                <BookCard 
                    id={item}
                    title="Arquitetura Limpa"
                    description = "As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers Código Limpo e O Codificador Limpo, o lendário artesão de software Robert C..."
                    image="https://pbs.twimg.com/media/EWyU7aPXYAAmV9R.jpg:large"
                />
            </Grid>
        ))}
    </Grid>
)
