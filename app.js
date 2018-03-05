const express = require( 'express' );
const app = express();

app.get('/', ((req, res, next) => res.send('Welcome!')));

app.listen(3000, function(){
  console.log('server listening');
})
