export async function  getProductDetails1(IdProduct:string){
      try {
     let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${IdProduct}`)
        if (!response.ok) {
        throw new Error('error in Api')
    }
    let payload = await response.json()
    return payload.data
   } catch (error) {
    console.log(error);
    throw new Error('error in Api')
}}