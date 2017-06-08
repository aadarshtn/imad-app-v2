var express = require('express');
var morgan = require('morgan');
var path = require('path');
var counter= 0;

var app = express();
app.use(morgan('combined'));

var articles = {
                'article-one': {
                    title: 'Article One | Adarsh Namboothiri',
                    heading: '<h2>Article One</h2>',
                    date: 'June 6 2016',
                    reporter: '<h4>Adarsh Namboothiri</h4>',
                    content:`<p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p>
                                <p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p>
                                <p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p> `
                },
                'article-two': { title: 'Article Two | Adarsh Namboothiri',
                    heading: '<h2>Article Two</h2>',
                    date: 'June 13 2016',
                    reporter: '<h4>Adarsh Namboothiri</h4>',
                    content:`<p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p>
                                <p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p>
                                <p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p> `},
                'article-three': { title: 'Article Three | Adarsh Namboothiri',
                    heading: '<h2>Article Three</h2>',
                    date: 'June 20 2016',
                    reporter: '<h4>Adarsh Namboothiri</h4>',
                    content:`<p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p>
                                <p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p>
                                <p>
                                    This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.This is my first attempt to create a webpage.
                                </p> `
                }
};
                

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var reporter = data.reporter;
    var content = data.content;

    var htmlTemplate = 
                    `<html>
                      <head>
                       <title>
                        ${title}
                       </title>
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link href="/ui/style.css" rel="stylesheet" />
                        </head>
                        <body>
                          <div class="container">
                            <div>
                                <a href="/">Home</a>
                                <hr/>
                                ${heading}
                                <div>
                                   ${date}
                                </div>
                                 <div>
                                   ${reporter}
                                 </div>
                                  <div>
                                  ${content}
                                  </div>
                              </div>
                          </div>
                        </body>
                    </html>`
                    ;
                    return htmlTemplate;
}


app.get('/counter', function( req, res) {
    counter = counter +1;
    res.send(counter.toString());
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
