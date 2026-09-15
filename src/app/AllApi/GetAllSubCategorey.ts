export async function GetAllSubCategorey(){
try {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/subcategories?limit=10');
    const payload = await response.json();
    console.log(payload.data , 'subCategorey');
    return payload.data
} catch (error) {
    console.log(error);
    
}
}