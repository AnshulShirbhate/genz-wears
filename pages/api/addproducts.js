import Product from "../../models/product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if(req.method == "POST"){
        for(let i=0; i<req.body.length; i++){
            let product = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                description: req.body[i].description,
                image:req.body[i].image,
                category:req.body[i].category,
                size: req.body[i].size,
                colour: req.body[i].colour,
                price: req.body[i].price,
                availableQuantity: req.body[i].availableQuantity,
            })
            await product.save();
        }
        res.status(200).json({success: "success"})
    }else{
        res.status(400).json({error: "This method is not allowed"})
    }
} 

export default connectDB(handler)
