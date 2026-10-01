    module.exports=    class Dashboardpage{

        /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){

        this.page=page
        this.cards=  this.page.locator(".card-body")
        this.cartbtn=this.page.locator("button[routerlink*='cart']")
       this.filterbox= this.page.locator("section .border-bottom [id='burgundy']")
       this.orderbtn=this.page.locator("[routerlink*='myorders']")


    }

    async  selectproduct(product){

            
       const counter= await this.cards.count()
       for(let i=0;i<counter;i++){
           if(await this.cards.nth(i).locator("h5").textContent() ===product){
                await this.cards.nth(i).locator("button").last().click();
                break

           }

       }
      

    }

   async gottocartpage(){
         await this.cartbtn.click();


    }

    async validdashboardpage(){

       const actfilterboxtext= this.filterbox.textContent()
       return actfilterboxtext

    }


    async gotoorderpage(){

       await this.orderbtn.click();
    }








}