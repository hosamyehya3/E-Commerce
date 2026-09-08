export async function GetCategorey(){
try {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
if(!response.ok) throw new Error('Error In Api')
const payload = await response.json()
return payload.data
} catch (error) {
     throw new Error('Error In Api')

}
}