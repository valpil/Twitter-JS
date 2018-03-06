const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express();

app.use(function(req, res, next) {
  console.log(req.method, req.originalUrl, res.statusCode);
  next();
});

app.use('/special/', function(req, res, next){
  console.log('You are special, congrats!');
  next();
});

app.get('/', ((req, res, next) => res.render( 'index', {title: 'Hall of Fame', people: people} )));

	// res.send('Welcome!')));

app.listen(3000, function(){
  console.log('server listening');
})


// Nunjucks

// nunjucks.configure('views', {noCache: true});

// nunjucks.render('index.html', locals, function (err, output) {
// 	console.log(output);
// });

// var localVars = {
// 	title: 'An Example',
// 	people : [ 
// 		{name: Gandalf}, 
// 		{name: Frodo}, 
// 		{name: Hermione} 
// 	]
// };

// Integration

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );
