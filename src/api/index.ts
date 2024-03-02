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

    public start():void;
    public start(port?: number):void{
        if(!port) port = 18030;
        this.app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        });
    }
}

export default ApiServer;