const { $ } = require('@wdio/globals')

class Finalise{
    async clkfinalise(){
        await $("//button[@id='finish']").click();
    }
}
module.exports= new Finalise()