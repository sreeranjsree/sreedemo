const { expect, $ } = require('@wdio/globals');

class Pause{
    async pause(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
      }
}
module.exports= new Pause()