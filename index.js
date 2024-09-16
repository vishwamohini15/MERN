const http=require('http')

const data={age:7}
const server = http.createServer((req, res) => {
     console.log(req.url);
     
console.log("server started");
res.setHeader("dummy", "dummy value")
// res.setHeader("content-type", "text/html")
// res.end(JSON.stringify(data))
res.end("hello")

})

server.listen(8080)