// Global Object
// Trong node chúng ta có quyền truy cập vào 1 đối tượng global vs 1 số phương thức
// khác nhau
// VD đối tượng windown trong browser là global object
// Global object node là node environment - global

console.log(global);

// global.setTimeout(() => {
//     console.log('in the timeout');
// }, 3000);


// k cần gọi global
// setTimeout(() => {
//     console.log('in the timeout');
//     clearInterval(int);
// }, 3000);

// const int = setInterval(()=> {
//     console.log('in the interval')
// }, 1000)

// Đường dẫn tuyệt đối đến thư mục hiện tại 
console.log(__dirname);
// Đường dẫn tuyệt đối đến thư mục hiện tại + file được thêm
console.log(__filename);

