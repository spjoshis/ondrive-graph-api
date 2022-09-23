const http = require('http'),
    axios = require('axios'),
    express = require('express'),
    path = require('path'),
    parser = require('body-parser');

const app = express();
app.set('port', process.env.PORT || 8080);
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    const link = "https://login.microsoftonline.com/71d33bdf-eca4-4f10-a51a-da14f6cbe975/oauth2/v2.0/authorize?client_id=e10fa9aa-dcee-45d4-a729-362bd875b068&scope=offline_access%20files.read&response_type=token&redirect_uri=http://localhost:8080/callback.html";
    res.redirect(link);
});

app.post('/callback', async function (httpReq, httpRes) {
    axios.get(
        "https://graph.microsoft.com/v1.0/me/drive/root/children?^$select=id,name,folder,package", {
            headers: {
                "Authorization": "Bearer " + httpReq.body.token
            }
        })
    .then(function (response) {
        const resBody = [{
            'status': 'success',
            'data': response.data
        }];
        httpRes.status(200).json(resBody);
    })
    .catch(function (error) {
        httpRes.status(422).json({
            "error": 1,
            "message": error.response.data
        });
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});