"use client";

import { SessionProvider } from "next-auth/react";
import { Thasadith } from "next/font/google";

export function Providers({children}:{children:React.ReactNode}){
    return <SessionProvider>
        {children}
    </SessionProvider>
}

// this is the ideal to wrap the children inside the session Providers
// we can also do this directly in the layout.tsx but there are some downsides to That
// so this is the ideal way and it can also a bunch of other providers if we want 