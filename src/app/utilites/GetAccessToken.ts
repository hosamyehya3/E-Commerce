import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
export async function GetTokenFunc(){
    const cookie = await cookies();
    const NextAuthToken =  cookie.get('next-auth.session-token')?.value

    const AccessToken = await decode({
        token:NextAuthToken ,
        secret:process.env.NEXTAUTH_SECRET!
    })
    return AccessToken?.token
}