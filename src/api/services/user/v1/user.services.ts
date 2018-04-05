import Axios from 'axios';
import FakeDb from './../../../../utils/readFakeDb';

import { User } from './../../../models/user/user.model';

class UserServices {

    private mock;
    private fakeDb = FakeDb;

    constructor() {
        this.fakeDb.getDb().then(data => this.mock = data);
    }


    async getUser(id: number): Promise<User> {
        let user = this.mock.users.filter(user => user.id === id);
        if (user.length > 0) {
            return user[0];
        }
    }

    async getUsers(): Promise<Array<User>> {
        return this.mock.users;
    }

}

export default new UserServices();
