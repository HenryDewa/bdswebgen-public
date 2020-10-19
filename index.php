<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>BDS WEB GEN 2</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Basic Styles -->
  <!-- <link rel="stylesheet" type="text/css" media="screen" href="assets/css/tailwind.min.css"> -->
  <!-- <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css" /> -->
  <!-- <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> -->
  <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
   -->
  <link rel="shortcut icon" href="./favicon.ico" />
  <link rel="apple-touch-icon" sizes="76x76" href="./apple-icon.png" />
<link rel="stylesheet" href="styles.ca89447e2f9c0c035a49.css"></head>
<script>
  /**
   * Created By Henry<dewa.intech@gmail.com>
   * Get the user IP throught the webkitRTCPeerConnection
   * @param onNewIP {Function} listener function to expose the IP locally
   * @return undefined
   */
  var ClientIP = "127.0.0.1";
  function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    // ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
      iceServers: []
    }),
      noop = function () {
      },
      localIPs = {},
      ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
      
      key;
    function iterateIP(ip) {
      if (!localIPs[ip]) onNewIP(ip);
      localIPs[ip] = true;
    }
    //create a bogus data channel
    pc.createDataChannel("");
    // create offer and set local description
    pc.createOffer().then(function (sdp) {
      sdp.sdp.split('\n').forEach(function (line) {
        if (line.indexOf('candidate') < 0) return;
        line.match(ipRegex).forEach(iterateIP);
      });
      pc.setLocalDescription(sdp, noop, noop);
    }).catch(function (reason) {
      // An error occurred, so handle the failure to connect
      console.log('error ip : ', reason)
    });
    //listen for candidate events
    pc.onicecandidate = function (ice) {
      if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
      ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
  }
  getUserIP(function (ip) {
    console.log('ip client : ', ip)
    if (ip.match(/^(192\.168\.|169\.254\.|10\.|172\.(1[6-9]|2\d|3[01]))/))
      ClientIP = ip;
  });
  console.log(ClientIP !== '' ? ClientIP : 'ip kosong')

</script>

<body style="background-color: #F0F0F0;">
  <app-root></app-root>
<script src="runtime-es2015.91c2709b87f7c5bfbb46.js" type="module"></script><script src="runtime-es5.91c2709b87f7c5bfbb46.js" nomodule defer></script><script src="polyfills-es5.907dae9e8e4b9d223af9.js" nomodule defer></script><script src="polyfills-es2015.2f4798a71a37e25e56ea.js" type="module"></script><script src="main-es2015.e986fcb5fb93acf22697.js" type="module"></script><script src="main-es5.e986fcb5fb93acf22697.js" nomodule defer></script></body>

</html>
