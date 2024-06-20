import User from "../..//models/user";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        let u = new User(req.body);
        await u.save();
        res.status(200).json({success: "success"})
    }else{
        res.status(400).json({error: "This method is not allowed"})
    }
} 

export default connectDB(handler)