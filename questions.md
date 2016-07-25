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
    <div class='col-md-6 col-sm-12'>
      <h1> Hello!</h1>
    </div>

  </div>

---
Beginning: 6/27/16
1. What would the following JavaScript/jQuery do?
  var clickButton = $('#clicky');

  clickButton.on('click', makeDing);
  clickButton.css('background-color', red);

2. What would the following JavaScript/jQuery do?
  var counter = 1;
  var countdown = setInterval(function(){
      if(counter >= 10){
        clearInterval(countdown);
      }
      console.log(counter);
      counter += 1;
  }, 1000);

---
Beginning?: 6/29/16

1. Write a for loop that prints the numbers 4 to 10.
2. Let's pretend for a little bit. Your little brother (9 years old)
   says that all of his really smart friends at school are talking all
   about the DOM. He asks you to explain what the DOM is. Can you help
   him? Remember, he is only 9 years old...
   *Prompt*: The DOM is...


---
Beginning: 6/30/16
1. Write a for loop that logs the numbers from 3 to 51, but only every
   3rd number. For instance:
    3, 6, 9, ... 48, 51
2. The following is a JavaScript object, what would you say this object
   'represents' in the real world? Why do you say that?
   var x = {
      shape: 'sphere',
      oddNumbered: true,
      color: ['yellow', 'white'],
      roll: function(){},
      spin: function(){},
      bounce: function(){}
     };
3. There are a few errors in the following code. What are they?
    var table = {
        legs: 4;
        color: brown,
        fold: function{},
      };

---
Beginning: 7/1/16
1. Write a for loop that prints *double* the number from 17 to 38.

2. Describe what you think each of the routes accomplish:
  a. GET /posts/
  b. GET /posts/:id
  c. POST /posts/
  d. PUT /posts/:id
  e. DELETE /posts/:id

3. What would you guess the following would accomplish?
  GET /user/:id/friends



---
Beginning: 7/5/16
1. What does the acronym CRUD stand for?
2. What are the corresponding HTTP verbs for CRUD operations?
3. What would be the appropriate data types for the following schema
   fields?
   var dog = {
      name: ____,
      breed: ____,
      colors: _____,
      id: ______,
      age: ______,
      isHouseBroken: _____,
     }


---
Beginning: 7/13/16
1. What is the difference between these pieces of code:
    Piece 1:
    angular.module('ngthings', []);

    Piece 2:
    angular.module('ngthings')



2. The following code has a few errors. What are those errors?
    (function(){
      angular.module('ngbears', []);

      angular.module('ngbears')
              .factory('BearService', bearService);

      BearService.$inject = [$http];

      functon bearSercice('$http'){
        console.log('a service for bears!');
      }

  })()

3. What is the purpose of an Angular controller versus a service?
   Comparse those as best you can.


---
Beginning: 7/20/16
1. One of the following two routes will work... Which one will? Why will
   the other one not?
    **Code A**
   server.get('/teddybear/:color, :type', function(req,res){
     ...code...
   });
   **Code B**
   server.get('/teddybear/:color,:type', function(req, res){
     ...code...
   });
2. Describe, as best you can, the function of each of the three agile
   roles:
   - Scrum Master:
   - Scrum Team:
   - Product Owner:
3. What do each of the following HTTP status codes mean? (See if you can
   remember without the interwebs)
   - 404
   - 403
   - 304
   - 200
   - 500

---
Beginning: 7/21/16
1. What does the following code accomplish?
   //in thing.js
   function thing(req, res, next){
     console.log(req.method, req.headers);
     if (req.method == 'GET'){
        console.log(new Date());
      }
     next();
    }
2. What is the difference between the following two pieces of code?
  **Code A**
    server.use('/cheese', logger);
  **Code B**
    server.use(logger);

3. What is the purpose of a Angular service?

4. How long does a typical sprint last?

---
Beginning: 7/22/16
1. What is the DRY principle?

2. There are some errors in the following code. What are they?
   (function(){
    angular.modul('weather')
            .controller('StuffController', StuffController);

    StuffController.inject = ['scope'];

    function StuffController($scope){
      $scope.data = {
        things = ['crowbar', 'screwdriver'];
        'more' = 'chocolate'
      };

  )();




