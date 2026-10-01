    const base   =    require('@playwright/test')
    


  exports.customtest=  base.test.extend({


    testdata:{

        expdetailpagecontent:"order summary"

    }



    })