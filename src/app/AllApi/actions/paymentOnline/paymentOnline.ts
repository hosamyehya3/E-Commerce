'use server'
import { GetTokenFunc } from "@/app/utilites/GetAccessToken";

export async function OnlinePayment(prodId:string , shippingAddress:{}){
const token = await GetTokenFunc()
if(!token) throw new Error('UnAuthorized');
    
try {
    
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${prodId}?url=${process.env.NEXTAUTH_URL}` , {

method : 'POST' ,
body : JSON.stringify({
    shippingAddress : shippingAddress
}),
headers : {
    token : token ,
    'Content-type' : 'application/json'
}
})
if (!response.ok) throw new Error('UnAuthorized')
    const payload = await response.json()
return payload ;
} catch (error) {
    throw new Error('UnAuthorized')
    
}



}
