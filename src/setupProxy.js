const proxy=require("http-proxy-middleare");

module.exports=function(app){
    app.use(
        proxy("/users",{
            target:"http://192.168.1.9:7722/api/Login/RequestToken",
            secure:false,
            changeOrigin:true
        })
    );
};