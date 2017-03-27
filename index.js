var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var jwt = require('jsonwebtoken');
app.set('secret','soseiquenadasei');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/',function(req,res){
	res.send("Text simple response");
});

app.get('/json',function(req,res){
	res.json({msg:"JSON simple response"});
});

app.post('/authenticate',function(req,res){
	console.log("User: ",req.body.user,", Password:",req.body.password)
	
	if( req.body.user === "teste@email.com" && req.body.password === "123456" ){
		 var token = jwt.sign(
				{ user: req.body.user, role: 'admin' },
				app.get('secret'), 
				{ expiresIn : 60*60*24 }
		 );

		// return the information including token as JSON
		res.json({
			success: true,
			message: 'Enjoy your token!',
			token: token
		});
	}	
});

app.use('/api',function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('secret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});

//Endpoint protegidos por autenticação

app.get('/api/protected',function(req,res){
	res.json({
		success: true,
		message: 'Area protegida.'
	})
});

app.get('/api/users',function(req,res){
	res.json({sucess:true,data:[
		{ User: "User 1", Password: "123456"},
		{ User: "User 2", Password: "123456"},
		{ User: "User 3", Password: "123456"},
		{ User: "User 4", Password: "123456"},
		{ User: "User 5", Password: "123456"},
		{ User: "User 6", Password: "123456"},
		{ User: "User 7", Password: "123456"},
		]
	});
})

var server = app.listen(5000,function(){
	console.log("Acesse via http://loacalhost:5000");
})