import { BookView } from "../../components/organisms/book-view"
import { DefaultTheme } from "../../components/themes/default"
import { useRouter } from 'next/router'

function BookPage() {
    const router = useRouter()
    const {bookId} = router.query;
    return (
        <DefaultTheme>
            <BookView id={bookId} />
        </DefaultTheme>
    )
}

export default BookPage
