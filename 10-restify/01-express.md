Restify:
========

## Resources

* [Restify](http://restify.com/) Homepage & API

## REST

REST stands for Representational state transfer are are used to provide interaction between local systems (like browsers) to internet services using stateless operations.

REST requests are most commonly done via URL "paths" or "routes" to pre-defined operations using hypertext verbs (GET, POST, PUT, DELETE).  These http verbs map to our CRUD database actions like so:


      CRUD    |  MongoDB   |  REST
    ----------|------------|----------
      create  |   insert   |  PUT
      read    |   find     |  GET
      update  |   update   |  PUT
      delete  |   remove   |  DELETE

Because these verbs operate on pre-defined (and consistent) routes. We get a number of benefit from using REST.  REST is stateless, cacheable, easily layered, simple (it is often human readable), fast, and scalable.

The responses to a REST request can be almost any defined format including JSON, XML, or HTML.

## Routing

The restify api framework makes it easy for us to target specific http requests with the appropriate responses.

When a request reaches our web server it includes information such as the request action (GET, POST, PUT, DELETE), the requested resource in the form of a URL, and additional headers as well as any body content. Normally we would need to parse that information manually and, using application logic, ensure that the correct response is generated.

For example we could parse the action and URL to see that the request wants to `GET` the `/pages/about.html` resource and so return the document located in the server's `public` folder at the location. Or we could see that the requests wants to `POST` to the `/blog/posts` and contains body data and so create a new blog post with that data and return a redirection to the newly created resource.

It provides facilities for ensuring that the right part of our application responds to the right requests without having to manually parse everything. This is called *routing*.

Routing allow us to specify an action and a url path that will match against incoming requests. We also provide a callback for custom code that is executed any time someone makes a request that matches that action and url. In our callback we'll be able to access additional information in the url as well as any request headers easily and we'll be able to formulate a response to the request with very little work.

## Setup / Installation

Let's start by creating a project folder, setting up npm, and installing restify.

```
mkdir restify_example
cd restify_example
npm ini .
npm install restify --save
touch index.js
```

Now open your index.js file and create your simple restify project.

```
var restify = require('restify');
var server = restify.createServer();

server.get('/hello-world', function(req, res, next){
	res.send('Hello Word\n');
	next();
});

server.listen(8088, function() {
  console.log('%s listening at %s', server.name, server.url);
});
```

Setting up the server is simple because the createServer API takes the same arguments as the http.Server.listen we used in last weeks node example.

## Advanced Routing

Often we'll want to respond to similar but slightly different requests with the same code, or we'll want to be able to respond to requests whose resources we can't identify in advance.

This happens when we want the same code to run for many resources of the same type that are stored in a database but have unique identifiers. For example, it would be useful if the following paths:

	/people/zack
	/people/bobby

We can capture the second part of our path and use it as a parameter in our request.

```
server.get('/people/:name', function (req, res, next) {
  res.send('hello ' + req.params.name);
  next();
});

```

All parameters can be accessed through req.param & all our request information is available in our req variable.

We can add other responses as well.

```
server.post('/random', function create(req, res, next) {
	res.send(201, Math.random().toString(36).substr(3, 8));
	return next();
});
```

Couple things to note.

1. Calling next() is done to run the next handler in the chain and is generally best practice unless you want to short-circuit the handler chain in which case next(false) will work.
2. You can use Regular Expressions in your routes as well.
3. There is a server.use that takes function(req, res, next) handlers and is run BEFORE all other routes.  It is useful for performing actions on all incoming routes before they are processed by other handlers.
