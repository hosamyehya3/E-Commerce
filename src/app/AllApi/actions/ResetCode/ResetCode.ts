'use server'


export async function ResetCode(resetCode: string) {
 

    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resetCode), 
        });

        const payload = await response.json();

        return payload;
    } catch (error) {
        throw new Error('Error in processing ResetCode');
    }
}