import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    url_avatar: String
}, {
        collection: 'users'
    });

export default userSchema;
