import { Navbar } from '../../organisms/navbar'
import { css } from '@emotion/css'

const style = css `
    margin: 0;
    padding: 0;
`;

export const DefaultTheme = ({children}) => (
    <div className={style}>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
)
