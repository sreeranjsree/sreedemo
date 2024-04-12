const { $ } = require('@wdio/globals');

class CartPage {
    async checkout(){
        (await $("//button[@id='checkout']")).click();
    }
}
module.exports= new CartPage()