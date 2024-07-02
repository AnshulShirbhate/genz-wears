import Order from "../../models/order";
import connectDB from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken"

const handler = async (req, res) => {   
    const token = req.body.token
    var decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    let orders = await Order.find({email: decoded.email});
    res.status(200).json({orders});
}

export default connectDB(handler)