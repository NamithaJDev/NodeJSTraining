var express=require("express");
const path=require("path");
var productController=require("../controllers/productController")

var router=express.Router();

// middleware specific to products route
router.use((request,response,next)=>{
    console.log("Products routes middleware",request.rootDirName);// path to he root folder
    var wStream=fs.createWriteStream(path.join(request.rootDirName,"log","serverLog.txt"),{flags:"a"});
    morgan("short",{stream:wStream})
    wStream.close();
    next();
})

//get request to /products
router.get("/products",(request,response)=>{
    var res=productController.getProducts();
    if(res.length>0)
    {
        response.send(res);
    } else {
        response.status(403).send({msg:"Products not there"})
    }
})

router.post("/addProduct",(request,response)=>{
    productController.addProduct(request.body.productId, request.body.productName, request.body.price)
    response.send(productController.getProducts())
})

router.post("/updateProduct",(request,response)=>{
    var res = productController.updateProduct(request.body.productId, request.body.productName, request.body.price) 
    if (res) {
        response.send(productController.getProducts())
    } else {
        response.status(403).send({msg:"Product could not be updated"})
    }
})

router.delete("/deleteProduct",(request,response)=>{
    var res = productController.deleteProduct(request.body.productId)
    if (res) {
        response.send(productController.getProducts())
    } else {
        response.status(403).send({msg:"Product could not be deleted"})
    }
})

module.exports=router;



