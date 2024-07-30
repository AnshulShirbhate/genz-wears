import Product from "../../models/product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        try{
            await Product.findOneAndUpdate({slug: req.body.slug}, req.body);
            res.status(200).json({success: true})
        }catch(e){
            res.status(200).json({success: false})
        }
    }else{
        res.status(400).json({success: "This method is not allowed"})
    }
} 

export default connectDB(handler)
