 const {test} =  require('@playwright/test')
const XLSX= require('xlsx')

    

  module.exports=  class ReadExcel{
    

readexcel(){

const file = XLSX.readFile("./tests/Utils/TestData/exceltest.xlsx")
   const worksheet= file.Sheets['Sheet1']
   const rows= XLSX.utils.sheet_to_json(worksheet)

    return rows;




}





}