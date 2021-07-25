import { Navbar } from '../../organisms/navbar'
import { css } from '@emotion/css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './color'
import { Container, Grid } from '@material-ui/core'

const style = css `
    margin: 0;
    padding: 0;
    .main {
        padding: 30px 0;
    }
`;

export const DefaultTheme = ({children}) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={style}>
            <Navbar />
            <main className="main">
                <Container> 
                    <Grid container spacing={3} className={style}>
                        {children}
                    </Grid>
                </Container>
            </main>
        </div>
    </ThemeProvider>
)
