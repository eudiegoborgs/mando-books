import { BooksList } from "../components/organisms/books-list"
import { DefaultTheme } from "../components/themes/default"

function HomePage() {
    return (
        <DefaultTheme>
            <BooksList />
        </DefaultTheme>
    )
}

export default HomePage
