import * as mongoose from 'mongoose';
import UserSchema from './../schemas/user.schema';
import { User } from './../../models/user/user.model';

class UserDAO {

    private userModel = mongoose.model("users", UserSchema, "users");

    constructor() {

    }

    save() {
        let newUser = new this.userModel({ name: "teste" });
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

export default new UserDAO();




