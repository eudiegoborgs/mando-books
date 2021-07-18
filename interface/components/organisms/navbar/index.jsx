import React from 'react'
import { css } from '@emotion/css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Image from 'next/image'
import { Logo } from '../../atoms/logo'
// import icon from './icon.png'

const style = css`
    flex-grow: 1;   
    .menu-button {
        ${'' /* margin-right: ${theme.spacing(2)}; */}
    }
    .title {
        flex-grow: 1;
    }
`;

export const Navbar = () => (
    <div className={style}>
        <AppBar position="static">
            <Toolbar>
                <Logo />
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>
);
