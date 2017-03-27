OKCoders Developement Stack
===========================

* Language: JavaScript
* Compiler: Node.js
* Database: MongoDB
* Environment: Bash
* Service Library: Restify.js
* Source Control: Git
* Code Hosting: Github
* Application Hosting: Heroku

# Node setup

* mkdir node-simple-project
* cd node-simple-project
* echo "console.log('Hello world.')" > index.js
* npm init .
* npm install lodash --save
* node index.js
 
# github Setup

* echo "# node-server-simple" >> README.md
* git init
* git add README.md
* git commit -m "first commit"
* git remote add origin git@github.com:brockers/node-server-simple.git
* git push -u origin master

# Heroku Initial Setup

* echo "web: node index.js" > Procfile
* heroku login
* heroku create
* git push heroku master
* heroku ps:scale web=1
* heroku open
* heroku ps:scale web=0
