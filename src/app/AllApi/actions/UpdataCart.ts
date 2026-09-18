'use server'
import { GetTokenFunc } from "@/app/utilites/GetAccessToken";

export async function UpdataCart({prodId , count}:{prodId:string , count:number}){
const token = await GetTokenFunc()
if(!token){
    throw new Error('UnAuthorized')
}
try {
    
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${prodId}` , {

method : 'PUT' ,
body : JSON.stringify({
    count : count 
}) ,
headers : {
    token : token ,
    'Content-type' : 'application/json'
} , 

})
if (!response.ok) throw new Error('UnAuthorized')
    const payload = await response.json()
console.log('cart' , payload);
return payload ;
} catch (error) {
    throw new Error('UnAuthorized')
    
}



}