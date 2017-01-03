var http = require('http');
var crypto = require('crypto');
var config = require('./config');

http.createServer(function(req, res) {

	var now = parseInt(Date.now() / 1000);
    var rdm = parseInt(Math.random() * Math.pow(2, 32));

    var secretId = config.secretId,
    secretKey = config.secretKey,
    appid = config.appid,    
    bucket = config.bucket,
    folder = config.folder || '',
    expired = 0;

    if(folder && folder.indexOf('/') == 0) {
        folder = folder.substr(folder.indexOf('/')+1);
    }

    var fileid = encodeURIComponent('/'+appid+'/'+bucket+'/'+folder);

    var plainText = 'a='+appid+'&k='+secretId+'&e='+expired+'&t='+now+'&r='+rdm+'&f='+fileid+'&b='+bucket;
    var data = new Buffer(plainText,'utf8');
    var resStr = crypto.createHmac('sha1',secretKey).update(data).digest();
    var bin = Buffer.concat([resStr,data]);
    var sign = bin.toString('base64');

	res.write(sign);
	res.end();

}).listen(config.PORT || 8888);

console.log('server is running !');

