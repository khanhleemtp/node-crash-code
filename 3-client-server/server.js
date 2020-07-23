const http = require('http');

// instance server -> future Web socket
// callback đc chạy khi có yêu cầu đến server  
// req obj tải thông tin request vd URL được yêu cầu,
// res obj send response từ server => browser 
const server = http.createServer((req, res) => {
    console.log('request made');
});

// server hiện tại k làm gì cả, k chủ động lắng nghe yêu cầu từ client
// => listen
server.listen(3000, 'localhost', () => {
    // port, máy chủ lưu trữ cục bộ, callback gọi khi server listen
    console.log('Listening for request on port 3000')
});

