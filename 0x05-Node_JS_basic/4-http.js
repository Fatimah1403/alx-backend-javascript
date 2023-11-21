const http = require("http");
// const hostname = "127.0.0.1";
const port = 1245;

const app = http.createServer((req, res) => {
    const header = {
        "Content-Type": "text/plain"
    };
    res.writeHead(200, header);
    res.end("Hello Holberton School!\n");
});

app.listen(port )
 

module.exports = app;