import * as zod from 'zod'
 

export let schemaChangePassword = zod.object({

 
  currentPassword : zod.string().nonempty('currentPassword is Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 'Invaild Password') ,
  password : zod.string().nonempty('Password is Required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 'Invaild Password') ,
  rePassword : zod.string().nonempty('rePassword is Required')
}).refine((obj)=>{
  if (obj.rePassword === obj.password ) {
    return true
  }else {return false}
} , {path:['rePassword'] , message : 'Repassword and Password not Matched '})