import v1 from './v1/user.services';

class UserHandler {

    constructor() {
    }

    public versionHandler(version: string): any {
        switch (version) {
            case "1.0": return v1;
            default: return null;
        }
    }

}

export default new UserHandler();