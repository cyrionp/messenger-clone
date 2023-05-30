import prisma from '@/app/libs/prismadb';
import getSession from './getSession';

const getUsers =async () => {
    const session = await getSession();

    // If there is no session, it will return empty list
    if(!session?.user?.email){
        return [];
    }

    // This returns a list of users who are not us
    try{
        const users = await prisma.user.findMany({
            orderBy:{
                createdAt:'desc',
            },
            where:{
                NOT:{
                    email:session.user.email
                }
            }
        });

        return users;
    } catch(error:any){
        return [];
    }
}

export default getUsers;