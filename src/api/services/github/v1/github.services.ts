import Axios from 'axios';

class GithubServices {

    constructor() {
        this.getBaseUrl();
    }

    private getBaseUrl() {
        const api = Axios.create({
            baseURL: 'https://api.github.com',
        });

        return api;
    }

    async getUser(username: string): Promise<any> {
        let api = this.getBaseUrl();
        const response = await api.get(`/users/${username}`).catch(error => console.log(error));
        return response;
    }

}

export default new GithubServices();
