import {authOptions} from "@/utils/auth";
import NextAuth from "next-auth"


const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};


// //example of normal pai usage
// export const POST = (req) => {
//     //handle request and operation
// }