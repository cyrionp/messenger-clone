import {withAuth} from 'next-auth/middleware';

export default withAuth({
    pages:{
        signIn:"/"
    }
});

// We can protect our routes by using withAuth
export const config={
    matcher:[
        "/users/:path*"
    ]
};