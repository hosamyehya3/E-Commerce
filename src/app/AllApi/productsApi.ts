export async function getProductsApi(){
   try {
     let response = await fetch('https://ecommerce.routemisr.com/api/v1/products')
        if (!response.ok) {
        throw new Error('error in Api')
    }
    let payload = await response.json()
    return payload.data
   } catch (error) {
    console.log(error);
    throw new Error('error in Api')
   }
}

