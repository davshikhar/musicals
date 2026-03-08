"use client";
// we have to write this because we have a logic that can only run on the client like onclick
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar(){
    const session = useSession();

    return <div>
        <div className="flex justify-between">
            <div>
                Musicals
            </div>
            <div>
                {session.data?.user && <button className="bg-blue-500 rounded text-white px-2 py-2 mt-2 hover:bg-blue-600 cursor-pointer" onClick={() => signOut() }>LogOut</button>}
                {!session.data?.user && <button className="bg-blue-500 rounded text-white px-2 py-2 mt-2 hover:bg-blue-600 cursor-pointer" onClick={() => signIn() }>SignIn</button>}
            </div>
        </div>
    </div>
}