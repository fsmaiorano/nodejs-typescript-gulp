import * as mongoose from 'mongoose';
import UserSchema from './../schemas/user.schema';
import { User } from './../../models/user/user.model';

class UserDAO {

    private userModel = mongoose.model("users", UserSchema, "users");

    constructor() {

    }

    save(user) {
        let newUser = new this.userModel(user);
        newUser.save().then((userResponse) => {
            if (userResponse.errors) {
                console.log('error', userResponse.errors);
            }
            else {
                console.log('save on db');
            }
        })
    }
}

export default new UserDAO();




