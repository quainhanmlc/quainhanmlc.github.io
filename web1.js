const http = require ('http');
const host = 'localhost';
const port = 3000;
const server = http.createServer( (req, res) =>{
    res.write("<h1>Greenwich Vietnam</h1>");
    res.write("<h2>Computing Department</h2>");
    res.end("<h3>Cloud Computing</h3>");
});
server.listen(port, ()=>{
    console.log("Server is listening at http://"+ host + ":" + port)
});