import React from 'react'
import { css } from '@emotion/css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Logo } from '../../atoms/logo'
import { Link } from '@material-ui/core'

const style = css`
    flex-grow: 1;   
    .title {
        flex-grow: 1;
    }
`;

export const Navbar = () => (
    <div className={style}>
        <AppBar position="static">
            <Toolbar>
                <Logo />
                <Button href="#" component="a" color="inherit">Login</Button>
                <Button href="#" component="a" color="secondary" variant="contained">Registre-se</Button>
            </Toolbar>
        </AppBar>
    </div>
);
