const fs = require('fs');

// =============================================================
// reading files

// async vì mất 1 khoảng thời gian để đọc 
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// // gọi callback để đoạn code k bị block để thực hiện tác vụ tiếp theo luôn 
// // vì đọc file cần 1 time nên JS đẩy đoạn last line lên trên sau đó gọi callback
// // khi đọc xong files
// console.log('last line');


// =============================================================
// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello LD', () => {
//     console.log('file has written');
// })

// // nếu k tồn tại tạo ra file ms
// fs.writeFile('./docs/blog2.txt', 'Hello LD', () => {
//     console.log('file has written');
// })

// =============================================================
// directories
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         console.log(err);
//     })
//     console.log('folder deleted')
// }

// k chạy lại đc => tốt ktra thư mục có tồn tại ko

// =============================================================
// deleting files
// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('File deleted')
//     })
// }

// Hoạt động tốt cho các tệp nhỏ => Nếu dữ liệu lớn ??

// =================================================================
// Streams and Buffers

// STREAMS: Start using data, before it has finished loading
// Khi đọc DL Lớn trước khi loading xong  do đó có thể có gì đó với DL trước khi đọc đầy đủ
// Để chống lại điều này ==> SD luồng
// Luồng giải quyết điều làm gì đó trc khi loading xong dl

// Browser =================<==|Buffer|==<=|Buffer|=============== Data
// Thay vì đợi DL load hết cta truyền gói nhỏ buffer => gửi xuống luồng => sd

