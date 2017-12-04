var apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
var oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';

var Trello = require('../../../lib/trello-node-api')(apiKey, oauthToken);

var labelRequest = function () {
    var data = {
        name: 'LABEL_NAME',
        color: 'orange',
        idBoard: '5a24dff1a9daada4bbb5ec2c'
    };
    Trello.label.create(data).then(function (response) {
        console.log('response ', response);
    }).catch(function (error) {
        console.log('error', error);
    });
};

labelRequest();