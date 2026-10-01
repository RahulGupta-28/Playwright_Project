const { test, expect, request } = require('@playwright/test')




module.exports = class API {

    constructor(apicontext, loginpayload, orderpayload) {
        this.apicontext = apicontext
        this.loginpayload = loginpayload
        this.orderpayload = orderpayload

    }

    async gettoken(loginpayload) {



        const loginresponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {

            data: this.loginpayload
        })

        await expect(loginresponse.ok()).toBeTruthy()

        const responsejson = await loginresponse.json()
        const token = await responsejson.token
        console.log(token)
        return token



    }

    async getorderid() {

        const token = await this.gettoken()
        const orderresponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {

                data: this.orderpayload,
                headers: {

                    "authorization": token,
                    "content-type": "application/json",

                }
            })
            
        await expect(orderresponse.ok()).toBeTruthy()

        const orderjsonresponse = await orderresponse.json()

        const orderid = await orderjsonresponse.orders[0]
        console.log(orderid)
        return orderid

    }

}


