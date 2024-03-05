import Router from "koa-router";
import bcrypt from "bcrypt";

import { AuthenticateRequest } from "../types";
import { Profile, Token, User } from "../data";
import { generateAcessToken, userSerialize } from "../utils";

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
                ctx.status = 403;
                ctx.body = {
                    error: "ForbiddenOperationException",
                    errorMessage: "Invalid credentials. Invalid username or password.",
                };
                return;
            }
            const passwordMatch = await bcrypt.compare(body.password, user.password);
            if(!passwordMatch){
                ctx.status = 403;
                ctx.body = {
                    error: "ForbiddenOperationException",
                    errorMessage: "Invalid credentials. Invalid username or password.",
                };
                return;
            }
            const accessToken = generateAcessToken();
            const profiles = await Profile.findAll({
                where: {
                    pid: user.id
                },
            });
            let selectedProfile: Profile | Record<string,any> = {};
            const availableProfiles : Profile[] = [];
            if(profiles.length === 1){
                selectedProfile = profiles[0];
            } else if(profiles.length > 1) {
                availableProfiles.push(...profiles);
            }
            const responseBody = {
                accessToken,
                clientToken: body.clientToken,
                selectedProfile,
                availableProfiles,
                user: body.requestUser?userSerialize(user):{}
            };
            await Token.create({
                accessToken,
                clientToken: body.clientToken,
                playerUUID: selectedProfile.id || null,
                issuedTime: new Date(),
            });
            ctx.status = 200;
            ctx.body = responseBody;
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
