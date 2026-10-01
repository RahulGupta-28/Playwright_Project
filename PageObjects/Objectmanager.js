const { test, expect } = require('@playwright/test')
const Loginpage = require('./Loginpage')
const Dashboardpage = require('./Dashboardpage')
const Orderspage=  require('./Orderspage')
const Orderdetailpage=   require('./Orderdetailpage')
    module.exports= class Objectmanager {
    constructor(page) {
        this.login = new Loginpage(page)
        this.dashboardpage = new Dashboardpage(page)
       this.Orderspage= new Orderspage(page)
       this.Orderdetailpage= new Orderdetailpage(page)


    }

    getloginpage() {
        return this.login

    }

    getdashboardpage() {

       return this.dashboardpage

    }


     getorderspage() {

       return this.Orderspage

    }

    getorderdetailpage(){

        return this.Orderdetailpage
    }




}