'use server'

import { cookies } from "next/headers";


export async function userRegister(data:any){
try {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup` , {
    method :'POST', 
    body : JSON.stringify(data) ,
    headers : {'content-type':'application/JSON'        }
  })
const payload = await response.json()
console.log(payload);
if (response.ok) {
const cookieStorage =  await cookies();
cookieStorage.set('userToken' , payload.token , {
  httpOnly:true
})
}
return response.ok

} catch (error) {
  console.log(error);
  
}
}





export async function userLogin(data:any){
try {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin` , {
    method :'POST', 
    body : JSON.stringify(data) ,
    headers : {'content-type':'application/JSON'        }
  })
const payload = await response.json()
console.log(payload);
return response.ok

} catch (error) {
  console.log(error);
  
}
}