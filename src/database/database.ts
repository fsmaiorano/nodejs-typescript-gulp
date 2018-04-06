import * as mongoose from 'mongoose';
import databaseConfig from './config';
import UserSchema from './schemas/user.schema';
import { User } from './../api/models/user/user.model';

class Database {
    constructor() {
    }

    initDatabase() {
        mongoose.connect(`mongodb://${databaseConfig.url}:${databaseConfig.port}/${databaseConfig.name}`);
        const Users = mongoose.model("users", UserSchema, "users");

        var newUser = new Users({ name: "teste" });

        newUser.save().then((userResponse) => {
            if (userResponse.errors) {
                console.log('error', userResponse.errors);
            }
            else {
                console.log('foi');
            }
        })

    }
}

export default new Database();
