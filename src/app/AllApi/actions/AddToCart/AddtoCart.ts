'use server'
import { GetTokenFunc } from "@/app/utilites/GetAccessToken";
import { toast } from "@/components/ui/toast";

export async function AddToCart(prodId:string){
const token = await GetTokenFunc()
if(!token) throw new Error('UnAuthorized');
    
    


try {
    
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart` , {

method : 'POST' ,
body : JSON.stringify({
    productId : prodId
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



// 'use server'

// import { GetTokenFunc } from "@/app/utilites/GetAccessToken";

// export async function AddToCart(prodId: string) {
//   const token = await GetTokenFunc();

//   if (!token) {
//     return { success: false, message: "Login First." };
//   }

//   try {
//     const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
//       method: 'POST',
//       body: JSON.stringify({
//         productId: prodId
//       }),
//       headers: {
//         token: token,
//         'Content-Type': 'application/json'
//       }
//     });

//     const payload = await response.json();

//     if (!response.ok) {
//       return { 
//         success: false, 
//         message: payload.message || 'Failed to add item to cart.' 
//       };
//     }

//     return { success: true, data: payload, message: "Product added to cart!" };
//   } catch (error) {
//     return { success: false, message: "Something went wrong. Please try again." };
//   }
// }