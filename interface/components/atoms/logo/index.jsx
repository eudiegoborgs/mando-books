import React from 'react'
import { css } from '@emotion/css'
import Typography from '@material-ui/core/Typography'

const style = css`
    display: flex;
    flex-grow: 1;
    .title {
        flex-grow: 1;
        text-transform: uppercase;
    }
    .icon {
        margin-right: 5px;
        width: 30px;
        height: 30px;
    }
`;

export const Logo = () => (
    <div className={`${style} logo`}>
        <img
            src="/public/img/icon.png"
            src={'https://i.redd.it/z394307odi741.png'}
            alt="Mando Books"
            width={30}
            height={30}
            className="icon"
        />
        <Typography variant="h6" className="title">
            Mando Books
        </Typography>
    </div>
);
