import Router from "koa-router";

import { AuthenticateRequest } from "../types";
import { Profile } from "../data";

const authServerApi = new Router();

authServerApi.post('/authenticate', async (ctx) => {
    const body = ctx.request.body as AuthenticateRequest;
    try{
        const profile = await Profile.findOne({
            where: {
                name: body.username
            }
        });
        if(!profile){
            ctx.res.statusCode = 404;
            ctx.body = {
                error: "ENOTFOUND",
                errorMessage: "User not found"
            }
        }
        
    } catch(e) {
        ctx.status = 500;
        ctx.body = {
            error: "ESRVERR",
            errorMessage: "Internal server error"
        }
    }
    
})

export { authServerApi };