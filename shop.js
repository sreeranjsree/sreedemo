const { $ } = require('@wdio/globals');
const testlogin = require('./testlogin');

class Shop{
    async pause(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
      }
    
    async addcart(){
    await $('#add-to-cart-sauce-labs-backpack').click();
    

    }

    async gocart(){
        await $("//a[@class='shopping_cart_link']").click();
    }
}
module.exports=new Shop();