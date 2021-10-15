const express = require('express')
const serveIndex = require('serve-index');
const app = express()
const port = 80
const { execSync } = require("child_process");
const exec = require('child_process').spawn;
var myShellScript = exec('./autophoto', ['-i','-p','/usr/src/app/imageoutputs']);

myShellScript.stdout.on('data', (data)=>{
    console.log(data.toString('utf8'));
    // do whatever you want here with data
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data.toString('utf8'));
});

app.use(express.json());

app.use (express.static('webui/build/'));

app.post('/api', (req, res) => {
    console.log(req.body);
    myShellScript.stdin.cork();

    if ("Aperture" in req.body)
        myShellScript.stdin.write('a ' + req.body.Aperture + '\n');

    if ("Exposure" in req.body)
        myShellScript.stdin.write('e ' + req.body.Exposure + '\n');

    if ("Focus" in req.body)
        myShellScript.stdin.write('f ' + req.body.Focus + '\n');

    if ("ISO" in req.body)
        myShellScript.stdin.write('i ' + req.body.ISO + '\n');

    if ("Rotation" in req.body)
        myShellScript.stdin.write('r ' + req.body.Rotation + '\n');

    myShellScript.stdin.write('c\n');
    myShellScript.stdin.uncork();
    res.send('API OK')
})

app.use ('/downloads', express.static('imageoutputs'), serveIndex('imageoutputs'));

app.listen(port, () => {
    console.log(`Autophoto webapp listening at http://localhost:${port}`)


})
