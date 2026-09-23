import * as zod from 'zod'
 
export let SchemaResetCode = zod.object({
  resetCode : zod.string().nonempty('ResetCode is Required')
    



  
})