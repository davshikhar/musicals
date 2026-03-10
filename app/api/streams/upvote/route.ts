import { prismaClient } from "@/app/lib/db";
import { get } from "http";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import {z} from "zod";

const UpvoteSchema = z.object({
    streamId: z.string(),
})

export async function POST(req: Request){
    const getSession = await getServerSession();
    
    const user = await prismaClient.user.findFirst({
        where:{
            email: getSession?.user?.email || undefined
        }
    });

    if(!user){
        return NextResponse.json({message:"Unauthorized"},{status:400});
    }

    try{
        const data = UpvoteSchema.parse(await req.json());
        await prismaClient.upvote.create({
            data:{
                userId: user.id,
                streamId: data.streamId,
            }
        });
        //line below can be removed, just for testing purposes
        return NextResponse.json({message:"Upvoted"},{status:200});
    }
    catch(error){
        return NextResponse.json({message:"Multiple Upvotes not allowed"},{status:400});
    }
}