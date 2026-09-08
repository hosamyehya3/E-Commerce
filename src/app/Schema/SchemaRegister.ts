 import { Phone } from 'lucide-react'
import * as zod from 'zod'
 
export let schema = zod.object({
  name : zod.string().nonempty('Required is Name').min(3 , 'Min 3 Charaters').max(10, 'Max 10 Charaters') ,
  email : zod.string().nonempty('Email is Required').email('Invailed Email') ,
  password : zod.string().nonempty('Password is Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 'Invaild Password') ,
  rePassword : zod.string().nonempty('Enter Your Repassword'),
    phone : zod.string().nonempty('Phone is Required').regex(/^01[0125][0-9]{8}$/ , 'Invaild Number of Phone') ,



  
}).refine((obj)=>{
  if (obj.rePassword === obj.password ) {
    return true
  }else {return false}
} , {path:['rePassword'] , message : 'Repassword and Password not Matched '})