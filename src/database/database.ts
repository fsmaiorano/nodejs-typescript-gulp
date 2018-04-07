import * as mongoose from 'mongoose';
import databaseConfig from './database.config';

import UserDAO from './dao/user.dao';

//Initial State
import FakeDb from './../utils/readFakeDb';

class Database {

    constructor() {
        this.mock();
    }

    initDatabase() {
        mongoose.connect(`mongodb://${databaseConfig.url}:${databaseConfig.port}/${databaseConfig.name}`);
    }

    mock() {
        FakeDb.getDb().then(initialState => {

            initialState['users'].map(user => { UserDAO.save(user) });

        });
    }
}

export default new Database();
