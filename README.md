#scanR Node.js client

dead simple. fast ocr client  

  - No need for heavy libraries.
  - Simple to use.
  - Customize it easily. 

##Get Started

Simply install via [npm](https://npmjs.org/):

```javascript
npm install scanr-node
```
Load it and you're ready to go!

```javascript
var scanr = require('scanr')('YOUR_TOKEN', {lang: 'eng'});
scanr.ocr('https://i.imgur.com/fYY6P4Y.png', function(err, text){
  console.log(text);
}
```

[more docs](http://docs.scanr.xyz)

##Contribute
Please do. Fork it, star it, share it and add your code to the project. Help others.  

##License
MIT
