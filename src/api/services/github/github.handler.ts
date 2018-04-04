import v1 from './v1/github.services';

class GithubHandler {

    constructor() {
    }

    public versionHandler(version) {
        switch (version) {
            case "1.0": return v1;
            default: return null;
        }
    }

}

export default new GithubHandler();