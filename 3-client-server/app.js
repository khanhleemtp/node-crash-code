const express = require('express');

// express app

const app = express();

// listen for request
app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

app.get('/', (req, res) => {
    // express tự động setHeader
    res.sendFile('./views/index.html', {
        root: __dirname
    });
})

app.get('/about', (req, res) => {
    console.log(__dirname);
    // express tự động setHeader
    res.sendFile('./views/about.html', {
        root: __dirname
    });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 pages
// app.use => create Middleware in express
app.use((req, res) => {
    // middleware chức năng truy cập url khi nhập sai 
    // chức năng kích hoạt với mọi req đến nhưng chỉ khi chạy đến nó
    // mã chạy trên xuống dưới 
    // nó k nằm ở url cụ thể nào
    // đặt ở cuối cùng
    res.status(404).sendFile('./views/404.html', {
        root: __dirname
    })
})
