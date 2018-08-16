var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
var app = express();

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: databaseUri || 'postgres://postgres:root@localhost:5432/sph', // Connection string for your MongoDB database
  cloud: './cloud/main.js', // Absolute path to your Cloud Code
  appId:'appSPH', // 'br.com.balladapp',
  masterKey: 'home1519', // Keep this key secret!
  fileKey: 'optionalFileKey',
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

var config = {
  "allowInsecureHTTP": true,
  "apps": [
    {
      "serverURL": process.env.SERVER_URL || "http://localhost:1337/parse",
      "appId": "appSPH",
      "masterKey": "home1519",
      "appName": "appSPH"
    }
  ],"users": [
    {
      "user":"adm",
      "pass":"adm"
    }
  ],
  "trustyProxy": 1
}

var dashboard = new ParseDashboard(config, config.allowInsecureHTTP)

  // make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

app.use('/parse', api);

app.listen(1337, function() {
  console.log('Parse-server running on port 1337.');
});