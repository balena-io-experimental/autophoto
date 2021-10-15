const express = require('express')
const serveIndex = require('serve-index');
const app = express()
const port = 80
const { execSync } = require("child_process");
app.use(express.json());
app.use (express.static('webui/build/'));
app.post('/api', (req, res) => {
    console.log(req.body);
    const exec = require('child_process').exec;
    const myShellScript = exec('./autophoto -h');
    myShellScript.stdout.on('data', (data)=>{
	console.log(data);
	// do whatever you want here with data
    });
    myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});
    res.send('API OK')
})
app.use ('/downloads', express.static('imageoutputs'), serveIndex('imageoutputs'));

app.listen(port, () => {
  console.log(`Autophoto webapp listening at http://localhost:${port}`)
})
