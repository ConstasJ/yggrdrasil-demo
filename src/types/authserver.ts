interface AuthenticateRequest {
    username: string;
    password: string;
    clientToken: string;
    requestUser: boolean;
    agent: {
        name: string;
        version: number;
    }
}

export { AuthenticateRequest }