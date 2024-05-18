
// http module node js k ander request and create handle karta he
const http=require("http");

// 

http.createServer(
(req, res)=>{
    res.write("<h1>hello Qaiser welcome to node js");
    res.end();
}

).listen(4500);
