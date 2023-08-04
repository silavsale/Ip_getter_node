const express = require('express');
const os = require('os');

const app = express();
const port = 8777;

app.get('/api/ip', (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  let ip;

  for(let interfaceKey in networkInterfaces) {
    const networkInterface = networkInterfaces[interfaceKey];
    
    const ipv4 = networkInterface.find(net => net.family === 'IPv4' && !net.internal);

    if(ipv4) {
      ip = ipv4.address;
      break;
    }
  }

  res.send(ip);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
