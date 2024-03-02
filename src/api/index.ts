import Koa from 'koa';
import router from 'koa-router';
import { authApi } from './auth';

class ApiServer {
    private app: Koa;

    constructor() {
        this.app = new Koa();
        const mainRouter = new router();
        mainRouter.use('/auth',authApi.routes(),authApi.allowedMethods());
        mainRouter.get('/',(ctx)=>{
            ctx.body = 'Hello World';
        })
        this.app.use(mainRouter.routes());
        this.app.use(mainRouter.allowedMethods())
    }
}

export default ApiServer;