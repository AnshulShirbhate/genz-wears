// import connectDB from "./mongoose";
// import User from "../models/user";
// import jwt from "jsonwebtoken";


// const handler = token = async () =>{
//     try {
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await User.findOne({email: decodedToken.email});
//         return user;
//     } catch (error) {
//         throw(error);
//     }
// }

// export default connectDB(handler);