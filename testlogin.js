const { $ } = require('@wdio/globals')
//const Page = require('./testpage');

class TestLogin {

    async tlogin(details){

        await $('#user-name').setValue(details.uname);
        await $('#password').setValue(details.psswd);
        await $('#login-button').click();
        
    }
}
 
module.exports= new TestLogin()