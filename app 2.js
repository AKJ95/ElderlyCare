'use strict';

// Initialization of variables
/*global require:true*/
var express = require('express');
var app = express();

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var cookieSession = require('cookie-session');
var data;
var fs = require('fs');
fs.readFile('persistence.json', (err, persistence) => {
    data = JSON.parse(persistence);
});
var bodyParser = require('body-parser');
app.use(express.static('client'));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: false }));


var mockService = [{"name": "Hi", "location":"CLC013", "description":"great event."}, {"name":"That", "location":"E216B", "description":"Another great event."}];

app.post('/signup',function(req,resp){
  
    var mailbox = req.body.mailbox;
    var password = req.body.password;
    
    console.log(req.body)
    
    resp.send([JSON.stringify("Sign in successfully")]);
    
  });

app.get('/getServices', function(req, resp){
    let result = []
    for(let i = 0; i < data.services.length; i++)
    {
        let add = [];
        add.push(data.services[i].name);
        add.push(data.services[i].location);
        add.push(data.services[i].description);
        result.push(add);
    }
    resp.send(data.services);
});

app.get('/getServiceDates', function(req, resp){
    let result = []
    for(let i = 0; i < data.services.length; i++)
    {
        if(data.services[i].name==req.query.name)
        {
            result = data.services[i].dates;
            break;
        }
    }
    resp.send(result);
});



































const authCheck = (req, resp, next) => {
    if(!req.user)
    {
        resp.send(undefined);
    }
    else
    {
        next();
    }
};

// OAuth Login Code
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['bananarama']
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GitHubStrategy({
    clientID: '3c200a2915a21825024a',
    clientSecret: 'ec5c249c400114529bc3b35facce5a65a270304c',
    callbackURL: 'http://localhost:9595/auth/github/callback'
},  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
}));

// Routes
// Sends a list of books that satisfies the user's keywords
app.get('/search', function(req, resp){
    var results = [];
    for(let i = 0; i < data.books.length; i++)
    {
        console.log(data.books[i].title);
        if((data.books[i].title.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 ||
            data.books[i].genre.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 || 
            data.books[i].givenName.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 ||
            data.books[i].lastName.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 ||
            data.books[i].intro.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1) &&
            (data.books[i].genre == req.query.genre || 
            req.query.genre == '') &&
            (data.books[i].lastName + data.books[i].givenName == req.query.author || 
            req.query.author == '') )
        {
            results.push(data.books[i]);
        }
    }
    resp.send(results);
});

//
app.get('/search/review', function(req, resp){
    var results = [];
    for(let i = 0; i < data.reviews.length; i++)
    {
        if((data.reviews[i].book.title.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 ||
            data.reviews[i].book.genre.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 || 
            data.reviews[i].book.givenName.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 ||
            data.reviews[i].book.lastName.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 || 
            data.reviews[i].book.intro.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 || 
            data.reviews[i].reviewer.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 || 
            data.reviews[i].reviewTitle.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1 ||
            data.reviews[i].reviewContent.toLowerCase().indexOf(req.query.keyword.toLowerCase()) != -1) &&
            (data.reviews[i].book.genre == req.query.genre || 
            req.query.genre == '') &&
            (data.reviews[i].book.lastName + data.reviews[i].book.givenName == req.query.author || 
            req.query.author == '') && 
            (req.query.reviewtitle == data.reviews[i].reviewTitle || req.query.reviewtitle == undefined) && 
            (req.query.reviewer == data.reviews[i].reviewer || req.query.reviewer == undefined))
        {
            results.push(data.reviews[i]);
        }
    }
    resp.send(results);
});

// Sends a list of all genres
app.get('/search/byGenre', function(req, resp){
    var genreList = [];
    for(let i = 0; i < data.books.length; i++)
    {
        if(!genreList.includes(data.books[i].genre))
        {
            genreList.push(data.books[i].genre);
        }
    }
    resp.send(genreList.sort());
});

// Sends a list of all authors
app.get('/search/byAuthor', function(req, resp){
    var authorList = [];
    for(let i = 0; i < data.books.length; i++)
    {
        let repeat = false;
        for(let j = 0; j < authorList.length; j++)
        {
            if(authorList[j][0] == data.books[i].lastName && authorList[j][1] == data.books[i].givenName)
            {
                repeat = true;
            }
        }
        if(!repeat)
        {
            authorList.push([data.books[i].lastName, data.books[i].givenName]);
        }
    }
    resp.send(authorList.sort());
});

app.post('/submit/book', authCheck, function(req, resp){
    const submission = req.body.submission;
    let standby = JSON.parse(submission);
    let repeat = false;
    for(let i = 0; i < data.books.length; i++)
    {
        if(data.books[i].title == standby.title && data.books[i].lastName == standby.lastName && data.books[i].givenName == standby.givenName)
        {
            repeat = true;
        }
    }
    if(!repeat)
    {
        data.books.push(standby);
        fs.writeFileSync('persistence.json', JSON.stringify(data, null, 2));
        resp.send('Fine that worked.');
    }
    else
    {
        throw new Error('Repeat Entry');
    }
});

app.post('/submit/review', authCheck, function(req, resp){
    const submission = req.body.submission;
    let standby = JSON.parse(submission);
    let repeat = false;
    for(let i = 0; i < data.reviews.length; i++)
    {
        if(data.reviews[i].reviewer == standby.reviewer 
            && data.reviews[i].book.title == standby.book.title 
            && data.reviews[i].book.genre == standby.book.genre
            && data.reviews[i].book.lastName == standby.book.lastName
            && data.reviews[i].book.givenName == standby.book.givenName
            && data.reviews[i].reviewTitle == standby.reviewTitle)
        {
            repeat = true;
        }
    }
    if(!repeat)
    {
        data.reviews.push(standby);
        fs.writeFileSync('persistence.json', JSON.stringify(data, null, 2));
        resp.send('Fine that worked.');
    }
    else
    {
        throw new Error('Repeat Entry');
    }
    
});

app.post('/delete/review', authCheck, function(req, resp){
    const submission = req.body.submission;
    let standbyDelete = JSON.parse(submission);
    let i = 0;
    let found = false;
    while(i < data.reviews.length && !found)
    {
        if(equalsReview(standbyDelete, data.reviews[i]))
        {
            data.reviews.splice(i, 1);
            found = true;
            fs.writeFileSync('persistence.json', JSON.stringify(data, null, 2));
        }
        i++;
    }
    if(found)
    {
        resp.send('Fine that worked.');
    }
    else
    {
        throw new Error('No match');
    }
});

function equalsReview(r1, r2)
{
    if(r1.reviewer == r2.reviewer &&
        equalsBook(r1.book, r2.book) &&
        r1.reviewTitle == r2.reviewTitle &&
        r1.reviewContent == r2.reviewContent)
    {
        return true;
    }
    return false;
}

function equalsBook(b1, b2)
{
    if(b1.title == b2.title &&
        b1.genre == b2.genre &&
        b1.givenName == b2.givenName &&
        b1.lastName == b2.lastName)
    {
        return true;
    }
    return false;
}

app.get('/processSignup', function(req, resp){
    skip
});

// Login
app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/auth/login' }),
    function(req, resp) {
        resp.redirect('/');
    });

// Sends client-side the username if user is logged in or undefined otherwise
app.get('/user', authCheck, function(req, resp){
    resp.send(req.user.username);
});

app.get('/logout', function(req, resp){
    req.logout();
    resp.redirect('/');
});

/*global module:true*/
module.exports = app;