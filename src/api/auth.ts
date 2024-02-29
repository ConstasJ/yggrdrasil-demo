import { Context } from "koa";

async function authApi(ctx: Context){
    if(ctx.url === '/authserver'){
        ctx.body = 'authApi';
    }
}

export { authApi }