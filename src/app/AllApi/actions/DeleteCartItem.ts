'use server'
import { GetTokenFunc } from "@/app/utilites/GetAccessToken";

export async function DeleteCartItems(ProdId:string){
const token = await GetTokenFunc()
if(!token){
    throw new Error('UnAuthorized')
}
try {
    
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${ProdId}` , {

method : 'DELETE' ,
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