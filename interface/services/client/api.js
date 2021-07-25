import fetch from 'isomorphic-unfetch';

const BASE_URL = 'http://localhost:9000';

export default class ApiClient {
    async request(method, path, data = null) {
        let headers = {
            'Content-Type': 'application/json'
        };
        let config = {
            method,
            headers,
        };
        if (data) {
            config = {
                ...config,
                body: JSON.stringify(data)
            };
        }
        try {
            const response = await fetch(`${BASE_URL}/${path}`, config);
            const responseJSON = await response.json();
            if (response.ok) {
                return responseJSON;
            }
            return {
                ...responseJSON,
                error: true,
                response: responseJSON
            };
        } catch (error) {
            return {
                error: error.message,
            };
        }
    }

    async getBooksList() {
        const response = await this.request('GET', 'books');
        if (!response.error) {
            return response;
        }
        return [];
    }

    async getBook(id) {
        const response = await this.request('GET', `books/${id}/show`);
        if (!response.error) {
            return response;
        }
        return [];
    }

    async createPurchase(id) {
        const response = await this.request('PATCH', `books/${id}/purchase`);
        if (!response.error) {
            return response;
        }
        return null;
    }

    async auth({email, password}) {
        return this.request('POST', `users/auth`, {email, password});
    }

    async register(user) {
        return this.request('POST', `users/register`, user);
    }
}
