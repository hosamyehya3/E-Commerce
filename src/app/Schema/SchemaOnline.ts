import * as zod from 'zod'
 
export let SchemaOnlinePayment = zod.object({
  details : zod.string().nonempty('Required is details'),
  city : zod.string().nonempty('city is Required') ,
    phone : zod.string().nonempty('Phone is Required').regex(/^01[0125][0-9]{8}$/ , 'Invaild Number of Phone') ,
    



  
})