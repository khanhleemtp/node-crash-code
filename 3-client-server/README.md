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
 + Lưu ý: Middleware chạy từ trên xuống dưới
 Khi server reponse là kết thúc các middleware sau :D 
 + Example
        + Logger middleware to log details of every request
        + Authentication check middleware for protected routes
        + Middleware to parse JSON data from requests
        + Return 404 Pages      
==============================MongoDB========================================
 +VD Blog Collection > Blog Document {
        "id": ObjectId(12345);
        "title": "Open party"
 }
 + Mongoose is an ODM library - Object Document Mapping library
        ====Mongoose====
 Mongoose-> User model User.get(), User.findById()
         -> Blog model Blog.deleteOne()

 Schemas & Models
 +Schemas defines the structure of a type of data / document
  -Properties & property types

  User Schema                               Blog Schema
     - name (string), required                    - title (string), required
     - age (number)                               - snippet (string), required
     - bio (string), required                     - body (string), required

+Models allow us to communicate with database collections
                    get, save, delete, etc
  Blog Model        --------------------> Database Collection
  (Blog Schema)


============================GET, POST,DELETE==================================
REQUEST TYPE: 
 GET request to get a resource
 POST request to create new data (eg a new blog)
 DELETE request to delete data (eg delete a blog)
 PUT request to update data (eg update a blog)

+ localhost:3000/blogs GET
+ localhost:3000/blogs/create GET
+ localhost:3000/blogs POST
+ localhost:3000/blogs/:id GET
+ localhost:3000/blogs/:id DELETE
+ localhost:3000/blogs/:id PUT

Route Parameters
+ The variable parts of the route that may change value
       + localhost:3000/blogs/:id 
       + localhost:3000/blogs/12345
       + localhost:3000/blogs/abc

================================MVC==========================================
+ Stands for Model, View, Controller
+ MVC is way of structuring our code & files
+ Keep code more modular, reuseable & easier to read
Model => Controller <= Views
