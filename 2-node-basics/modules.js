// Nhập, xuất, tái sd, bảo trì ez => chia modules 

// const xyz = require('./people');

// destructoring object
const { people, ages } = require('./people');

// Khi require 1 tệp node tự động tìm đến file và chạy 


    // console.log(xyz.ages); 

    // console.log(xyz.people); 

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());