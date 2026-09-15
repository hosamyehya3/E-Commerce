export async function GetSpecificCategory(idBrand:any){
   try {
     const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${idBrand}`)
    const payload = await response.json()
    return payload.data
   } catch (error) {
    console.log(error);
    
   }
}