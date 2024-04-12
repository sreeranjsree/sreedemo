const { $ } = require('@wdio/globals');

class Details{
    async enterDetails(){

        await $("//input[@id='first-name']").setValue("Sreeranj");
        await $("//input[@id='last-name']").setValue("Sreenivasan");
        await $("//input[@id='postal-code']").setValue("678002");
        
        
    }

    async submit(){
        (await $("//input[@id='continue']")).click();
    }
}

module.exports= new Details()