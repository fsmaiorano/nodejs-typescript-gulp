import * as fs from 'fs';
import * as path from 'path';

class FakeDb {

    constructor() {
    }

    getDb() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '../../docs/db.json'), 'utf8', (error, data) => {
                resolve(JSON.parse(data));
            })
        })
    }

}

export default new FakeDb();
