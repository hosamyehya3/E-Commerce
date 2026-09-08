import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){


    return NextResponse.json({
       message:'success' ,
       count : 5 ,
       allProducts : [
        {name : 'nokia' , id : 52145 , price:50000} ,
        {name : 'samsung' , id : 52154 , price:60000} ,
        {name : 'realme' , id : 85145 , price:85000} ,
        {name : 'iphone' , id : 59655 , price:96000} ,
        {name : 'oppo' , id : 98745 , price:87500} ,
        {name : 'lg' , id : 52199 , price:46800} ,
       ] 
    })
}