const { test, expect, request } = require('@playwright/test')
const {customtest}=require('./Utils/TestData/FixtureData')
const API = require('./Utils/API')
const Objectmanager = require('../PageObjects/Objectmanager')
const dataset = JSON.parse(JSON.stringify(require('./Utils/TestData/data.json')))
const orderpayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };





for(const data of dataset){
customtest(`Order Verification - ${data.product}`, async ({ page, testdata}) => {
    const loginpayload = { userEmail: data.username, userPassword: data.password }
    
    const objectmanager = new Objectmanager(page)
    const login = objectmanager.getloginpage()
    const dashboard = objectmanager.getdashboardpage()
    const orderpage = objectmanager.getorderspage()
    const orderdetailpage = objectmanager.getorderdetailpage()


    const apicontext = await request.newContext()
    const api = new API(apicontext, loginpayload, orderpayload)
    const orderid = await api.getorderid()
    await login.gottolandingpage()
    await login.loginapp(data.username,data.password)


    await dashboard.gotoorderpage()
    const isorderpresent = await orderpage.searchorder(orderid)
    await expect(isorderpresent).toBeTruthy()
    await  orderpage.clickonorderview(orderid)


    const orderdetailresponse= await orderdetailpage.validateorderdetail()
    expect(orderdetailresponse.actpagecontent.trim()===testdata.expdetailpagecontent).toBeTruthy()
    expect(orderdetailresponse.actorderid === orderid).toBeTruthy()


})
}