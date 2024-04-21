
const jwt = require("jsonwebtoken")
const jwtPass ="Password";
const zod =require("zod");


const emailSchema = zod.string().email();
const passwordSchema = zod.string().password(8);

function signJwt(username, password){
    const usernameResponse =  emailSchema.safeParse(username)
    const passwordResponse =  passwordSchema.safeParse(password)
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({ 
        username
    }, jwtPass)

    return signature
}

function jwtVerification(signature){
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    
    }
    signature.decode

}
const ans = signJwt("amrithjayadeep916@gmail.com","$Amrith7" );
console.log(ans);




app.listen(3000);
