import asyncHandler from "express-async-handler"

export const createProductController = asyncHandler(async(req , res)=>{
    const {name , quantity , price , image} = req.body;
    const product = await Product.create({name , quantity , price , image});
    res.status(201).json({message : "Product Created Successfully" , data:{product}})
});

export const getProductsController = asyncHandler(async (req , res) => {
    const products = await Product.find();
    res.status(200).json({message : "Products Fetched Successfully" , data:{products}})
});

export const getProductController = asyncHandler( async (req , res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json({message : "Product Fetched Successfully" , data:{product}})
})

export const updateProductController = asyncHandler(async (req , res) => {
    const {name , quantity , price , image} = req.body;
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id , {name , quantity , price , image} , {new : true});
    res.status(200).json({message : "Product Updated Successfully" , data:{product}})
})

export const deleteProductController = asyncHandler(async (req , res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({message : "Product Deleted Successfully" , data:{product}});
})