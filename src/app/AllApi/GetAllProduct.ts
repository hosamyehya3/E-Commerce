'use server'
export async function GetAllProducts(){
try {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/products');
    const payload = await response.json();
    return payload.data
} catch (error) {
    console.log(error);
    
}
}