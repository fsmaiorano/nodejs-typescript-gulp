import * as mongoose from 'mongoose';
import databaseConfig from './config';

import UserDAO from './dao/user.dao';

class Database {
    constructor() {
        this.mock();
    }

    initDatabase() {
        mongoose.connect(`mongodb://${databaseConfig.url}:${databaseConfig.port}/${databaseConfig.name}`);
    }

    mock(){
        let x = UserDAO.save();
    }
}

export default new Database();
