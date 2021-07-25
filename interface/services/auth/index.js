const STORAGE_WORD = 'TOKEN_LOGIN';

export default class Auth {
    static login({name, email}) {
        console.log({
            name,
            email
        })
        localStorage.setItem(STORAGE_WORD, JSON.stringify({name, email}))
    }
    
    static logout() {
        localStorage.setItem(STORAGE_WORD, false)
    }

    static isLogged() {
        try {
            const result = localStorage.getItem(STORAGE_WORD)
            const unserialized = JSON.parse(result)
            return unserialized.name && unserialized.email 
        } catch (error) {
            console.log(error)
        }
        return false
    }

    static getName() {
        if (!this.isLogged()) {
            return null
        }
        const userData = JSON.parse(localStorage.getItem(STORAGE_WORD))
        return userData.name
    }
}
