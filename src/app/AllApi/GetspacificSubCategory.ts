export async function  getspacificSubCategory(IdSubDetails:any){
      try {
     const response = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${IdSubDetails}`)
  
    const payload = await response.json()
    return payload.data
   } catch (error) {
    console.log(error);
}}