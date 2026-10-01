module.exports=class Orderspage{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page=page
       this.allrows= this.page.locator("tbody tr")
  
    }

    async searchorder(orderid){
       const isorderpresent= this.page.getByText(orderid)
       return isorderpresent

    }

    async clickonorderview(orderid){
       const rows= this.page.locator("tbody tr")
       await rows.first().waitFor();
       const rowscount= await rows.count()
       for(let i=0;i<rowscount;i++){
        if(await rows.nth(i).locator("th").textContent()===orderid){

                await rows.nth(i).locator("button").first().click();
                break

        }


       }


    }







}