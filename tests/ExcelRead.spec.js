const { test } = require('@playwright/test')
const XLSX = require('xlsx')
const Objectmanager = require('../PageObjects/Objectmanager')
const ReadExcel = require('./Utils/ReadExcel')
const readexcel = new ReadExcel()
const rows = readexcel.readexcel()

for (const row of rows) {
    test(`excel login ${row.username}`, async ({ page }) => {

        const objectmanager = new Objectmanager(page)

        const loginpage = objectmanager.getloginpage()
        await loginpage.gottolandingpage()

        await loginpage.loginapp(row.username, row.password)


    })
}










