6/7/16
1. Without asking, name as many people as you can in here.
2. What package did we install for Atom?
3. What are the three dominate technologies that we are going
    to use to develop web applications in here?


---
6/8/16
Beginning:
Send me an email with the following:
1. What are the two tech questions that you have from yesterday?
2. Do you prefer two 10 minute break after 50 minutes or do you  prefer a 20 minute break after 75 minutes?












Ending:
1. What command line functions/utilities did we learn how to use yesterday? (Hint: one is 'cd')
2. What is the difference between git and GitHub?
3. List and describe the function of the git commands that
you learned about tonight. (List as many as you can.)




Ending 6/9/16:
1. List and describe all of the git commands that you can remember.
 - git status
 - git remote -v
 - git remote add
 - git commit -m 'msg'
 - git add
 - git init
 - git push [remote] [branch]
2. What is the purpose of the package.json?
  - Created to demonstrate that you are working
    on a Node project. Keeps tabs of metadata as well as
    any dependencies (node modules that you are using).
3. Why do we type 'npm install express --save' and not just
    'npm install express'?
  - The --save flag updates the package.json to keep tabs
    of the used modules such as Express. Whereas, without --save
    the modules are downloaded, but you do not have a record.
4. Describe what the following two lines of of code do:
    var express = require('express');
    - Creates a variable called express that is assigned the value
    of the module(piece of functionality) that resides in the express
    node module. The require looks in the node_modules folder to find
    the package in question.
    var chocolate = express();
    - Creates a variable called chocolate and assigns that a reference
    to the express "object" that you can use as a server in your
    application.
   Please use excruciating detail... :D



---

Beginning: 6/13/16
1. Explain what the following piece of code does:
   server.get('/about', function(request, response){
      response.sendFile('public/html/about.html', {root: __dirname});
   });

2. There is something wrong with the following html, what is it? How do
   I fix it? (There may be more than one error)

   <!DOCTYPE>
   <html>
      <head>
        <title> Some Title and Stuff </title>
      </head>

   <body>
      <h1> I like cheese! </h1>
      <img src='http://cheesepix.com/123'></img>
   </body>
   <html>


---

Beginning: 6/14/16
1. We have learned about two HTTP verbs, GET and POST. Describe, the
   best you can, the similarities and differences between those two
   methods of submitting an HTTP request. (Say what you know)

2. What does the following lines of code accomplish?
    ...
    server.get('/contact', function(request, response){
      request.send('hello');
    });

    server.post('/contact', function(request, response){
      request.json(request.body);
    });

3. What is the purpose of the following line of code?

    server.listen(8080, function(){
      console.log('Now listening on port 8080');
    });

---

Beginning: 6/16/16
1. I have been trying to change the color of the font on my page to
   #456602 using the following CSS rule:
   .cool-text{
      font-color: #456602;
    }
    However, I cannot get it to work. Explain what changes I need to
    do...
2.  What does the following line of code accomplish?
    ...
    server.use(express.static(__dirname+'/public'));
    ...
3. What is the outcome of the following CSS rules?
    p {
      font-family: Comic Sans MS;
      font-size: 20px;
    }
    p {
      font-weight: bold;
      font-size: 17px;
    }




---
Beginning: 6/20/16
1. What would the following pieces of code do? Why?
  <script src='js/bootstrap.js'></script>
  <script src='js/jquery.js'></script>

2. What would the following code produce?
  <div class='row'>
    <img class='col-md-6 col-sm-12' src='images/cheese.png'>
    <div class='col-md-6 col-sm-12'> <h1> Hello!</h1></div>
  </div>
