import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";

const Yt_regex = new RegExp("^https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})");

const CreateStreamSchema = z.object({

    creatorId: z.string(),
    url: z.url() 
});  

export async function POST(req: NextRequest){{
    try{
        const data = CreateStreamSchema.parse(await req.json());
        const isYt = Yt_regex.test(data.url);
        if(!isYt){
            return NextResponse.json({message:"only youtube links are allowed"},{status:400});
        }

        const extractedId = data.url.split("?v=")[1];

        await prismaClient.stream.create({
            data:{
                userId: data.creatorId,
                url: data.url,
                extractedId: extractedId,
                type:"YOUTUBE"
            }
        })
    }
    catch(e){
        return NextResponse.json({message:"error while adding streams",error:e},{status:400});
    }
}
    const data = await req.json();
    console.log(data);
    return new Response("ok");
}