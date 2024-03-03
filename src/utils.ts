function generateAcessToken(){
     // generate a 30-character random string
    return Math.random().toString(36).slice(-30);
}

export { generateAcessToken };