import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

const settingsUrl = absoluteUrl("/settings");


export async function GET() {
   

    try {
        const {userId} = auth();
        const user = await currentUser();

        if (!userId || !user){
            return new NextResponse('Unauthorized', {status:401})
        }

        const userSubscription = await prismadb.userSubscription.findUnique({
            where:{userId}
        })
        
      if(userSubscription && userSubscription.stripeCustomerId){
        

      }

    } catch (error) {
        console.log("error fromstripe", error)
        return new NextResponse("Server Internal Error ",{status:500})
        
    }
    
}