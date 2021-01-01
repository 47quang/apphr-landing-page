const path = require('path');
const express = require('express');
const app = express();
const public_path = path.join(__dirname, 'build');
const port = process.env.PORT || 3000;

console.log('---- Public path: ', public_path);
app.use(express.static(public_path));
app.get('/', function(req, res) {
  res.sendFile(path.join(public_path, 'index.html'));
});
app.get('*', (req, res) => {                       
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});