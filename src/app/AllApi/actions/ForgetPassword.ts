'use server'

export async function ForgetPassword(email: string) {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email), 
        });

        const payload = await response.json();
        console.log(payload, 'Forget');

        return payload;
    } catch (error) {
        throw new Error('Error in processing password');
    }
}