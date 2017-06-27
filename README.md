# volatileJS
a Javascript library which enables users to specify functions which should be triggered if a specific url is accessed 

# Note
Library is still under development and should not be used in production.

# Coming Soon
Supporting multi-layer url's ie. something/like/this

Adding other amazing features

# Usage
import the file into the entry point of your application. eg. your index.php file.

open `` volatileJS.js``

delete the ```HomeController``` and the default routes

 ```js
 //declare your functions
 //example
 
 var MyObject = {
 myFunc:function(param)
  {
    // do something with param
  },
  mySecFunc:function()
  {
    // do Something here
  }
 }
 
 
 // add your routes
 router.gets('/home','MyObject@myFunc',['Parameter']);
 router.gets('/about','MyObject@mySecFunc');
 
 ```

