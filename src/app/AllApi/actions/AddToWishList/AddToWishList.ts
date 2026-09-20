'use server'
import { GetTokenFunc } from "@/app/utilites/GetAccessToken";
import { toast } from "@/components/ui/toast";

export async function WishListFunc(productId:string){
const token = await GetTokenFunc()
if(!token) throw new Error('UnAuthorized');
try {
    
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist` , {

method : 'POST' ,
body : JSON.stringify({
    productId : productId
}),
headers : {
    token : token ,
    'Content-type' : 'application/json'
}
})
if (!response.ok) throw new Error('UnAuthorized')
    const payload = await response.json()
console.log(payload , 88888);

return payload ;
} catch (error) {
    throw new Error('UnAuthorized')
    
}



}

