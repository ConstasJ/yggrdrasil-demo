import Koa from 'koa';
import { authApi } from './auth';

class ApiServer {
    private app: Koa;

    constructor() {
        this.app = new Koa();
        this.app.use(authApi);
    }
}

export default ApiServer;