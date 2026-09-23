'use server'

import { GetTokenFunc } from "@/app/utilites/GetAccessToken";



export async function ChangePassword(obj:any) {

  const token = await GetTokenFunc();

      if (!token) {
        return
    }


  try {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', {
      method: 'PUT',
      headers: {
        'token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });
if (!response.ok) throw new Error('UnAuthorized')

    const payload = await response.json();
  return payload

    
  } catch (error) {
 throw new Error('UnAuthorized')
  }
}