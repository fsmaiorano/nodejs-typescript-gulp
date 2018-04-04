import Axios from 'axios';

class GithubServices {

    private axios = Axios;

    constructor() {
        this.init();
    }

    private init() {
        return this.axios.create({
            baseURL: 'https://api.github.com',
        });
    }

    public async getUser(username) {
        const response = await this.axios.get(`/users/${username}`);
        return response.data;
    }

}

const githubServices = new GithubServices();

export default githubServices;
