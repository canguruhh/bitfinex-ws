const BFX = require('bitfinex-api-node'),
      APIKEYS = require('./config/apikeys');

const opts = {
    version: 2
};

APIKEYS.forEach(function(apikey){

    let bws = new BFX(apikey.key, apikey.secret, opts).ws;

    bws.on('open', () => {
        console.log('try to login %s',apikey.name);
        bws.auth();
    });

    bws.on('auth', () => {
        console.log('authenticated %s',apikey.name);
    });

    bws.on('message', (msg) => {
        console.log(msg);
    });
});

