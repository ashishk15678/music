import { NextResponse } from "next/server"

async function POST(req){
    const res = await req.json();
    const song = await fetch("https://saavn.me/search/songs?query=kun+faya+kun&page=1&limit=2")
console.log(song);
return NextResponse.json({"Ok":"OK"})
} 

async function GET(){
return NextResponse.json({"message":"Nothing to see"})
}
export {GET}