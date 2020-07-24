const express = require('express');
const morgan = require('morgan');
// express app

const app = express();

// register vỉew engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// listen for request
app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

// middleware static files
// 
app.use(express.static('public'));


// morgan-read http request
app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
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

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create a new Blogs'
    })
})

// 404 pages
app.use((req, res) => {
    res.status(404).render('404',{
        title: '404'
    })
})
