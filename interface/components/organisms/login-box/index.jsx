import React, {useState} from 'react'
import { css } from '@emotion/css'
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { Input } from '../../atoms/input';
import ApiClient from '../../../services/client/api';
import Auth from '../../../services/auth';

const style = css `
    margin: 0 auto;
    padding: 20px 0;
    width: 400px;
    .card {
        width: 100%;
    }
    .form-control {
        margin: 10px 0;
    }

    .action {
        width: inherit;
        margin-left: auto;
    }
`;


const apiClient = new ApiClient();
export const LoginBox = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const onSubmitForm = async (event) => {
        event.preventDefault()
        const result = await apiClient.auth({email, password})
        if (result.error) {
            setErrorMessage(result.message)
            return;
        }
        Auth.login(result)
        window.location.href = '/'
    }

    return (
        <form className={style} onSubmit={onSubmitForm} id="login-form">
            <Card className="card">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Faça login na sua conta
                    </Typography>
                    <Input id="email" label="E-mail" value={email} type="email" onChange={setEmail} />
                    <Input
                        id="password"
                        label="Senha"
                        inputProps={{minLength:8}}
                        value={password}
                        type="password"
                        onChange={setPassword}
                    />
                    {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                    <CardActions>
                        <div className="action">
                            <Button href={`/register`} component="a" size="small" color="default">
                                Não tem conta? Registre-se
                            </Button>
                            <Button size="small" color="primary" variant="contained" type="submit">
                                Entrar
                            </Button>
                        </div>
                    </CardActions>
                </CardContent>
            </Card>
        </form>
    )
}
