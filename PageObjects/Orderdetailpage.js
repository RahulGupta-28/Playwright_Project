module.exports=  class Orderdetailpage{

     /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page=page



    }

    async validateorderdetail(){

        let orderdetailresponse={}

    const actpagecontent= await this.page.locator(".email-title").textContent()
   orderdetailresponse.actpagecontent=actpagecontent
   const actorderid= await this.page.locator(".col-text").textContent()
  orderdetailresponse.actorderid=actorderid
  return orderdetailresponse




    }



}