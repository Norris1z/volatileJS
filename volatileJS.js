const HomeController = {
  users(name, name1) {
    console.log(name,name1);
  },
  sendMailToAdmin(email) {
        console.log(`Sending email to ${email}`);
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
    if(url[0]=='/')
      {
        url =url.slice(1,url.length);
      }
    if(url[url.length-1] == '/')
      {
        url =url.slice(0,url.length-1);
      }
    return url;
  }
