export async function GetspecificBrand(idBrand:any){
   try {
     const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${idBrand}`)
    const payload = await response.json()
    return payload.data
   } catch (error) {
    console.log(error);
    
   }
}