class Product
{
    productId;
    productName;
    price;

    constructor(productId,productName,price)
    {
        this.productId=productId;
        this.productName=productName;
        this.price=price;  
    }

    setUser(productId,productName,price)
    {
        this.productId=productId;
        this.productName=productName;
        this.price=price;  
    }
}
module.exports=Product;