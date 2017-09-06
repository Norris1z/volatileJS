/*---------------------------------------------*\
  -DUMMY ROUTER PACKAGE.
  PROJECT NAME: VOLTJS
  AUTHOR: NORRIS ODURO
  FORKED: JAB CLARI
\*---------------------------------------------*/
const $print = console.log.bind(console);

const HomeController = {
  users(name, name1) {
    $print(name,name1);
  },
  sendMailToAdmin(email) {
        $print(`Sending email to ${email}`);
    }
};


//router object
const router = {
  routes: [],
  currentUrl: {},
  gets(url, action, parameters=[]) {
    this.routes.push({url:this.parseUrl(url),action,parameters});
  },
  parseUrl(url) {
    if(url[0]=='/'){
        url =url.slice(1,url.length);
      }
    if(url[url.length-1] == '/'){
        url =url.slice(0,url.length-1);
      }
    return url;
  },
  dispatch(url) { 
    let uri = new URL(url);
    if(this.mapUrl(this.parseUrl(uri.pathname))){
       let userFunc = this.parseUserFunc(this.currentUrl.action);
        return window[userFunc[0]][userFunc[1]](...this.currentUrl.parameters);
      }else{
        //throw "Sorry Route Not Defined";
        $print(`Sorry route ${uri.pathname} not defined`)
      }
  },
  mapUrl(url) {
    for(let i =0; i<this.routes.length;i++){
        if(this.routes[i].url == url){
            this.currentUrl = this.routes[i];
            return true;
          }
      }
    return false;
  },
  parseUserFunc(action) {
     return action.split("@"); 
  }
};

//declare your routes
router.gets("/users/","HomeController@users",["Norris Oduro","Joshua Baah"]);
router.gets("/something","HomeController@sendMailToAdmin",["norrisjibril@gmail.com"]);

router.dispatch(window.location.href);
