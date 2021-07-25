import LocalMemoryDataBase from "../../infrastructure/database/local-memory"

export default class BooksSeed {
    private static COLLECTION_NAME = 'books'

    static seed() {
        const booksList = [
            {
                title: "Arquitetura Limpa",
                amount: 10,
                author: "Uncle Bob",
                description :  "As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores.",
                image: "https://pbs.twimg.com/media/EWyU7aPXYAAmV9R.jpg:large",
            },
            {
                title: "Harry Potter",
                amount: 10,
                author: "J. K. Rowling",
                description :  "O livro do menino bruxo mais vendido do mundo.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV2feL-DTzybLWQ1zwqKgkuU2bmMuqJkBGA&usqp=CAU",
            },
            {
                title: "O Hobbit",
                amount: 10,
                author: "J. R. R. Tolkien",
                description :  "Um livro para pessoas com espirito forte.",
                image: "https://cdn.ome.lt/ZxSOGZDn86spHrLv-FOYfqDovHY=/fit-in/1070x750/smart/filer_public/1e/a6/1ea65f5f-a8e5-4005-8f97-cecb62110f10/ohobbit-capa.jpg",
            },
            {
                title: "O Essencialismo",
                amount: 10,
                author: "Greg McKeown",
                description :  "Necessário, somente o necessário, o extraordinário é demais.",
                image: "https://blog.caffeinearmy.com.br/wp-content/uploads/2020/09/livro_essencialismo.png",
            },
        ]
        for (const book of booksList) {
            LocalMemoryDataBase.insertOnCollection(this.COLLECTION_NAME, book);
        }
    }
}
