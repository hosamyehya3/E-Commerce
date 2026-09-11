import {NextAuthOptions} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { jwtDecode } from "jwt-decode";
export const AuthOptions:NextAuthOptions = {
    providers : [
        Credentials({
            name : 'Login Now' ,
            credentials : {
                email:{label:'Email' , type: "email" , placeholder :'Enter Your Email'} ,
                password:{label:'PassWord' , type: "password" , placeholder :'Enter Your PassWord'} ,
            },
          async  authorize(credentials){
const response = await fetch(`${process.env.API}auth/signin` ,{
    method:'POST' ,
    body :JSON.stringify({
        email:credentials?.email ,
        password :credentials?.password
    }) ,
    headers : {
        'Content-Type' : 'application/json'
    }
})
if (!response.ok) {
    throw new Error(response.statusText)
}
const payload = await response.json()
const userData:{id:string} = jwtDecode(payload.token)
console.log(userData , '000userData');

console.log(payload , 'payload');


            //call api
return {
    id : userData.id ,
    name : payload.user.name ,
    email : payload.user.email ,
    token : payload.token
}
            }
        })
    ] ,
    callbacks : {
        //token obj by next auth => data of user
        //user func return from athrorize
        jwt({token , user}){
            if (user) {
                   token.id = user.id 
            token.token = user.token
            console.log( token.token);
            
            }
         
            return token
        } ,
        session({token , session}){
            if (token) {
                            session.user.id = token.id

            }
            return session
        }

    } ,
    pages:{
    signIn:'/login'    
    }

}