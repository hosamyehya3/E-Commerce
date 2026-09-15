export async function getAllBrands(){
try {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/brands')
const payload = await response.json()
console.log(payload , 'Brrrrrrrrrrrand');
return payload.data
} catch (error) {
    console.log(error);
    
}
}