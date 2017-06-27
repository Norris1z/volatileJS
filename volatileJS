// Dummy router implementation in javascript
// Author: Norris Oduro Tei
// Email: norrisjibril@gmail.com

'use strict';

var HomeController = {
  users:function(name,name1){
    console.log(name,name1);
  },
  sendMailToAdmin:function(email){
        console.log("Sending email to "+email);
    }
};


//router object
var router = {
  routes: [],
  currentUrl: {},
  gets: function(url,action,parameters=[])
  {
    this.routes.push({url:this.parseUrl(url),action:action,parameters:parameters});
  },
  parseUrl:function(url)
  {
    if(url[0]=='/')
      {
        url =url.slice(1,url.length);
      }
    if(url[url.length-1] == '/')
      {
        url =url.slice(0,url.length-1);
      }
    return url;
  },
  dispatch:function(url)
  { 
    let uri = new URL(url);
    if(this.mapUrl(this.parseUrl(uri.pathname)))
      {
       let userFunc = this.parseUserFunc(this.currentUrl.action);
        return window[userFunc[0]][userFunc[1]](...this.currentUrl.parameters);
      }else{
        //throw "Sorry Route Not Defined";
        console.log("Sorry route "+uri.pathname+" not defined")
      }
  },
  mapUrl:function(url)
  {
    for(let i =0; i<this.routes.length;i++)
      {
        if(this.routes[i].url == url)
          {
            this.currentUrl = this.routes[i];
            return true;
          }
      }
    return false;
  },
  parseUserFunc:function(action)
  {
     return action.split("@"); 
  }
}

//declare your routes
router.gets("/users/","HomeController@users",["Norris Oduro","Joshua Baah"]);
router.gets("/something","HomeController@sendMailToAdmin",["norrisjibril@gmail.com"]);

router.dispatch(window.location.href);
