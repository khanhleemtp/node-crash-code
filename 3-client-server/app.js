const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
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

// blog routes
app.use('/blogs', blogRoutes);

// 404 pages
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    })
})
