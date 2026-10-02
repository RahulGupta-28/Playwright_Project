const { test, expect } = require('@playwright/test')
const Objectmanager= require('../PageObjects/Objectmanager')
const dataset=   JSON.parse(JSON.stringify(require('./Utils/TestData/data.json')))

const exptitletext="Log in" 
const expfilterboxtext="Filters"


for(const data of dataset){
test(`Product purchase flow-${data.product}`, async ({ page }) => {
   const objectmanager= new Objectmanager(page)
    const login=objectmanager.getloginpage()
    await login.gottolandingpage()
   const acttext= await login.getloginpagetitle()
   await expect(acttext === exptitletext).toBeTruthy()
   await login.loginapp(data.username,data.password)

   const dashboard= objectmanager.getdashboardpage()
   const actfilterboxtext= await dashboard.validdashboardpage()
  await expect(actfilterboxtext === expfilterboxtext).toBeTruthy()
   await dashboard.selectproduct(data.product)

  await dashboard.gottocartpage()
  //end of test

  

})  
} 