import Koa from 'koa';
import router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import { authApi } from './auth';
import { authServerApi } from './authserver';

class ApiServer {
    private app: Koa;

    constructor() {
        this.app = new Koa();
        this.app.use(bodyParser())
        const mainRouter = new router();
        mainRouter.use('/auth',authApi.routes(),authApi.allowedMethods());
        mainRouter.use('/authserver',authServerApi.routes(),authServerApi.allowedMethods());
        mainRouter.get('/',(ctx)=>{
            ctx.body = 'Hello World';
        })
        this.app.use(mainRouter.routes());
        this.app.use(mainRouter.allowedMethods())
    }

    public start():void;
    public start(port?: number):void{
        if(!port) port = 18030;
        this.app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
    }
}

export default ApiServer;