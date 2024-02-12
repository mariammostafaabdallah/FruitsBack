const express=require("express");
const app=express();
const mongoose=require("mongoose");
const productRoute =require("./routes/productRoute");
const contentRoute =require("./routes/contentRoute");
const Product=require('./models/Product');


mongoose.connect('mongodb://127.0.0.1:27017/Shop').then(function(data)
{
console.log("connected")
}).catch(err=>{
    console.log(err)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/Products",productRoute);
app.use("/api/Content",contentRoute);
app.get("/test",(req,res)=>{
    res.json({msg:"hello your app is running"})
});
app.get("/allprd",   async function (req, res) {
    const products =  await Product.find({});
    res.json({
        message: "all product",
        status: 200,
        data: products,
        success: true,
    });
});



app.listen(5000||process.env.Port,()=>{
    console.log("server is  running");
})
