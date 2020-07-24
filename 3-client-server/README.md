IP Addresses

Mỗi máy có 1 IP định danh duy nhất => Khó nhớ => Domain
Nhập domain => find ip => find computer saving website => send request

                GET REQUEST
BROWSER  ==========================> Host 216.58.216.164
            -> Look-up IP Address
            associated with that domain

        <=============================
                <- HTML

        HTTP - Hyper-text tranfer protocol

        -> Server sd HTTP giao tiếp vs Client


=============================Local host=====================================
+ Localhost is like a domain name on the web: vd google.com
+ Localhost =IP==> 127.0.0.1 ==> Own computer(server with name localhost)
+ Server listen request from my computer

 =========================PORT Number===========================
 + Port number are like 'doors' into a computer

 localhost:3000
 + Port để trình duyệt biết kết nối đến máy tính của tôi qua số cổng cụ thể này là nơi máy chủ lắng nghe request

 ==============================NPM====================================
 + Global package => npm i g packageName => sd bất cứ đâu trên máy tính
 + My package: package.json 
        + npm init
        + script: dependencies of my project
 +Install package locally npm install --save 

 ============================Express===========================================
 + Khi thêm post, get request ... mọi thứ khá lộn xộn
 => Framework: Express giúp dễ dàng quản lí yêu cầu logic phía máy chủ và 
 phản hồi 1 cách ez, cập nhật, mở rộng
 => clean code

 ===============================Template Engine===================================
 + EJS Template is are processed through the EJS view engine on the server

 + EJS => EJS View Engine => HTML => Browser 
 => Server-side rendering 

 =============================Middleware==========================================

 + Request ... => app.use(func) => app.get('/', func) => app.use(func)
  => app.use(func) .... => response

 + Example
        + Logger middleware to log details of every request
        + Authentication check middleware for protected routes
        + Middleware to parse JSON data from requests
        + Return 404 Pages      