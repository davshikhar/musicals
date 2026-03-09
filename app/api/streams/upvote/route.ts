import { NextRequest } from "next/server";
import {z} from "zod";

const upvoteSchema = z.object({
    streamId: z.string(),
    userId: z.string(),
})

export async function POST(req: NextRequest){

}