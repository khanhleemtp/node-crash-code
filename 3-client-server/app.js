const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app

const app = express();

// connect mongodb
const dbURI = 'mongodb+srv://khanhk62hust:Ngocanh260999@cluster0.qecny.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true,  useUnifiedTopology: true})
    .then((result) =>
        // listen for request
        {
            app.listen(3000, () => {
            console.log('Server listening on port 3000')
        });
        })
    .catch((err) => console.log(err))
// register vỉew engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// middleware static files
// 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

// morgan-read http request
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blogs 2',
        snippet: 'About my new Blog',
        body: 'more about my new Blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/all-blog', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('5f1b375fc1ab2b2dcc5da6f6')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

// routes

app.get('/', (req, res) => {
        res.redirect('/blogs');
  });


// app.use((req, res, next) => {
//     console.log('In the next middleware: ');
//     next();
// })



app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
});

// blogs route
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch(err => {
            console.log(err);
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create a new Blogs'
    })
})

app.post('/blogs', (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then(result => {
            res.redirect('/blogs');
        })
        .catch(err => {
            console.log(err);
        })
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => console.log(err))    
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            // phản hồi điển hình khi dùng api
            res.json({ redirect: '/blogs' });
            // Why you don't redirect in here ?
            // When you send AJAX request in front-end all chúng ta đang 
            // thực hiện với JS chứ k phải web form
            // When we send that type of request in node we cannot use a redirect
            // as a response
            // => We have send maybe JSON or textdata back to browser and
            // that json data is gonna have a redirect property
            // we receive that data back over here we're gonna look at that
            // same URL 
        })
        .catch(err => console.log(err))
})


// 404 pages
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    })
})
