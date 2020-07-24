const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// instance server -> future Web socket
// callback đc chạy khi có yêu cầu đến server  
// req obj tải thông tin request vd URL được yêu cầu,
// res obj send response từ server => browser 
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    
    // lodash
    const num = _.random(0, 30);
    console.log(num);

    // Lodash cho Hàm chạy 1 lần
    const greet = _.once(() => {
      console.log('Hello')  
    })

    greet();
    greet();

    //set header content type
    res.setHeader('Content-type', 'text/html'); // html, json, text-plain
    // res.write('<head><link rel="stylesheet" href="#" /></head>');
    // res.write('<h3>hello, ld </h3>');
    // res.write('<h3>hello, ld again</h3>');
    // res.end();
    
    let path = './views/';
    switch(req.url) {
        case '/': 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about': 
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-blah': 
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;            
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;    
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })

});
// Status Code
// Status codes describle the types of response sent to the browser
// 200-Ok. 301-Resource moved. 404-not found. 500-Internal server error
// 100 Ranges: info res
// 200 Ramges: success codes
// 300 Ranges: codes for redirects
// 400 Ranges: user or client error codes
// 500 Ranges: server error codes




// server hiện tại k làm gì cả, k chủ động lắng nghe yêu cầu từ client
// => listen
server.listen(3000, 'localhost', () => {
    // port, máy chủ lưu trữ cục bộ, callback gọi khi server listen
    console.log('Listening for request on port 3000')
});

