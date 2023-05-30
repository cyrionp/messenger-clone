import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { FullConversationType, FullMessageType } from "../types";
import { User } from "@prisma/client";

const useOtherUser=(conversation:FullConversationType|{
    users:User[]
})=>{
    const session = useSession();
    const otherUser= useMemo(()=>{
        const currentUserEmail= session?.data?.user?.email;
        const otherUser = conversation.users.filter((user)=>user.email!==currentUserEmail);
        // Returns only the first user from the array named otherUser
        return otherUser[0];
    }, [session?.data?.user?.email, conversation.users]);

    return otherUser;
};

export default useOtherUser;