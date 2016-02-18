module.exports = function(token, options) {
  var lang = (options && options.lang) ? options.lang : 'eng';
  var url = 'https://api.scanr.xyz/ocr?token=' + token + "&lang=" + lang;

  return {
    ocr: function(path, cb) {
      var request = require('request');
      var fs = require('fs');

      if (path.indexOf('http') == 0)
        request.post({url: url, form: {url: path}}, process_response);
      else
        request.post({url: url, formData: {file: fs.createReadStream(path)}}, process_response);

      function process_response(err, httpResponse, body){
        cb(err, body ? JSON.parse(body) : null);
      }
    }
  }
}
