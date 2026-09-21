 import { Phone } from 'lucide-react'
import * as zod from 'zod'
 
export let SchemaOrder = zod.object({
  details : zod.string().nonempty('Required is details'),
  city : zod.string().nonempty('city is Required') ,
    phone : zod.string().nonempty('Phone is Required').regex(/^01[0125][0-9]{8}$/ , 'Invaild Number of Phone') ,
    postalCode : zod.string().nonempty('postalCode is Required') 



  
})