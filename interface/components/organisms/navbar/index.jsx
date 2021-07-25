import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Logo } from '../../atoms/logo'
import Auth from '../../../services/auth'
import { Typography } from '@material-ui/core'

const style = css`
    flex-grow: 1;   
    .title {
        flex-grow: 1;
    }
`;

const MenuOptions = ({isLogged, name}) => {
    const logout = () => {
        Auth.logout()
        window.location.href = '/'
    }
    if (isLogged) {
        return [
            (<Button color="inherit" id="navbar-user-name">Oi {name}</Button>),
            (<Button color="inherit" color="secondary" variant="contained" onClick={logout} id="logout">Sair</Button>),
        ]
    }
    return [
        (<Button href="/login" component="a" color="inherit" id="login">Login</Button>),
        (<Button href="/register" component="a" color="secondary" variant="contained" id="register">Registre-se</Button>)
    ]
}

export const Navbar = () => {
    const [logged, setLogged] = useState(false)
    const [name, setName] = useState('')

    useEffect(() => {
        setLogged(Auth.isLogged())
        setName(Auth.getName())
    }, [])
    return (
        <div className={style}>
            <AppBar position="static">
                <Toolbar>
                    <Logo />
                    <MenuOptions isLogged={logged} name={name} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
