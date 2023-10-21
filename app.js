const http = require('http')
const path = require ('path');
const fs = require('fs')

const server = http.createServer((req,res) => {
    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : `.${req.url}.html`);
    console.log(filePath);
    let contentType = "text/html";

    fs.readFile(filePath, (err, content) => {
        if(err){
            console.log(err);
        }
        else {
            res.writeHead(200, {"Content-Type" : contentType});
            res.end(content);
        }
    })


})
let PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));