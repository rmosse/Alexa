//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);

    switch (request.url) {
        case "/media/play":
        case "/media/pause":
            playPause();
            break;
        case "/system/shutdown":
            shutdown();
        case "/":
        case "/favicon.ico":
            break; // swallow
        default:
            console.log("unknown command: '" + request.url + "'")
    }
}

// Actions
function shutdown() {
    var exec = require('child_process').exec;
    var cmd = "/usr/bin/osascript -e 'tell application \"System Events\" to shut down'";

    console.log(cmd)
    exec(cmd, function(error, stdout, stderr) {
      // command output is in stdout
    });
}

function playPause() {
    var exec = require('child_process').exec;
    var cmd = "/usr/bin/osascript /Users/mosser/AlexaService/mediakeys-play-pause.scpt";

    console.log(cmd)
    exec(cmd, function(error, stdout, stderr) {
      // command output is in stdout
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
