import { Navbar } from '../../organisms/navbar'
import { css } from '@emotion/css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './color'
import { Container } from '@material-ui/core'

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
                    {children}
                </Container>
            </main>
        </div>
    </ThemeProvider>
)
