module.exports=  class Loginpage{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page=page;
        this.usernametxtbox=this.page.locator("[id='userEmail']")
        this.passwordtxtbox=this.page.locator("[id='userPassword']")
         this.loginbtn= this.page.locator("[id='login']")
        this.titlebox= this.page.locator(".login-title")

    }
    async gottolandingpage(){
        await this.page.goto("https://rahulshettyacademy.com/client");


    }

   async loginapp(username,password){
        
          
          await this.usernametxtbox.fill(username);
          await this.passwordtxtbox.fill(password);
          await  this.loginbtn.click();
          await this.page.waitForLoadState('networkidle');
   
    }

   async getloginpagetitle(){
     const acttext= await  this.titlebox.textContent()
     return acttext
      
    }

}