
const database = {};

export default class LocalMemoryDataBase {
    private static getCollection(collection: string)
    {
        if (typeof database[collection] === "undefined") {
            database[collection] = []
        }
        return database[collection]
    }

    static insertOnCollection(collection: string, data: object)
    {
        const datalist = this.getCollection(collection)
        const id = datalist.length + 1
        datalist.push({ id, ...data })
        return id
    }

    static updateOnCollection(collection: string, id: number, data: object)
    {
        let datalist = this.getCollection(collection);
        for (let i = 0; i < datalist.length; i++) {
            if (datalist[i].id === id) {
                datalist = { ...data, id }
                return true
            }
        }
        throw {code: 404, message: `Item com o id: ${id} não encontrado na collection: ${collection}`}
    }

    static getAllOnCollection(collection: string)
    {
        return this.getCollection(collection)
    }

    static getOnCollection(collection: string, id: number)
    {
        const datalist = this.getCollection(collection)
        console.log(datalist)
        for (let i = 0; i < datalist.length; i++) {
            if (datalist[i].id === id) {
                return datalist[i]
            }
        }
        return null
    }

    static getFirstOnCollectionByKey(collection: string, key: string, value: any)
    {
        const datalist = this.getCollection(collection)
        for (let i = 0; i < datalist.length; i++) {
            if (datalist[i][key] === value) {
                return datalist[i]
            }
        }
        return null
    }

    static deleteOnCollection(collection: string, id: number)
    {
        let datalist = this.getCollection(collection);
        datalist = datalist.filter(d => d.id !== id)
    }
}
