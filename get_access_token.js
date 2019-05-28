const awyhttp = require('awyhttp');

var appid = 'wxa46c8c961bc480a5';
var appsecret = 'eac89a2c554d95dfa135b411f7c64534';

var token_api = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecret}`;

awyhttp.get(token_api).then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
