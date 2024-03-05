export * from './serialize';

function generateAcessToken(){
     // generate a 30-character random string
    return Math.random().toString(36).slice(-30);
}

function signedToUnsignedUUID(uuid:string) {
    return uuid.replace(/-/g, '');
}

function unsignedToSignedUUID(uuid:string) {
    return uuid.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
}

export { 
    generateAcessToken,
    signedToUnsignedUUID,
    unsignedToSignedUUID
};