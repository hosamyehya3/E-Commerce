import * as zod from 'zod'
 
export let schemaForgetPassword = zod.object({

  email : zod.string().nonempty('Email is Required').email('Invailed Email') 



  
})