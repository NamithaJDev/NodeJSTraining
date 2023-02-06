const Product = require("../model/product");
var Users=require("../model/product");
var products = [
    { productId: 101, productName: "Milk", price: 20 },
    { productId: 102, productName: "Orange", price: 120 },
    { productId: 103, productName: "apple", price: 140 },
    { productId: 104, productName: "palak", price: 10 },
    { productId: 105, productName: "tomato", price: 30 }
]

function getProducts() {
    return products
}
function checkProduct(productId) {
    var pos=products.findIndex(product =>product.productId == productId);
    if(pos >=0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function addProduct(productId,productName,price) {
    products.push(new Product(productId,productName,price))
    return true
}
function updateProduct(productId,productName,price) {
    if (checkProduct(productId)) {
        var pos = products.findIndex(item => item.productId == request.body.productId)
        products[pos] = new  Product(productId,productName,price)
        return true
    } else {
        return false
    }
}
function deleteProduct(productId) {
    if (checkProduct(productId)) {
        var pos = products.findIndex(item => item.productId == productId)
        products.splice(pos, 1)
    } else {
        return false
    }
}

module.exports={getProducts,addProduct,updateProduct,deleteProduct}