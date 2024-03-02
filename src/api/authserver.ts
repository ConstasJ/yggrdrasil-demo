import Router from "koa-router";
import bcrypt from "bcrypt";

import { AuthenticateRequest } from "../types";
import { Profile, User } from "../data";

const authServerApi = new Router();

authServerApi.post("/authenticate", async (ctx) => {
    const body = ctx.request.body as AuthenticateRequest;
    try {
        // if login with user name and not email
        if (!body.username.includes("@")) {
            // TODO
        } else {
            const user = await User.findOne({
                where: {
                    email: body.username,
                },
            });
            if(!user){
                ctx.status = 404;
                ctx.body = {
                    error: "EUNFUND",
                    errorMessage: "User not found",
                };
                return;
            }
            const passwordMatch = await bcrypt.compare(body.password, user.password);
            if(!passwordMatch){
                ctx.status = 401;
                ctx.body = {
                    error: "EPASSERR",
                    errorMessage: "Wrong password",
                };
                return;
            }
            
        }
    } catch (e) {
        ctx.status = 500;
        ctx.body = {
            error: "ESRVERR",
            errorMessage: "Internal server error",
        };
    }
});

export { authServerApi };
