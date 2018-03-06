const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express();
const routes = require('./routes');


app.use(function(req, res, next) {
  console.log(req.method, req.originalUrl, res.statusCode);
  next();
});

app.use('/', routes);

app.use(express.static('public'));

// app.use('/special/', function(req, res, next){
//   console.log('You are special, congrats!');
//   next();
// });

// app.get('/', ((req, res, next) => res.render( 'index', {title: 'Hall of Fame', people: people} )));

app.listen(3000, function(){
  console.log('server listening');
})

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
