// completely gratuitous jsdom use
var jsdom = require('jsdom'),
    days = [];

jsdom.env({
  // tmpvar's contrib's are not sparse like mine
  url: 'https://github.com/users/tmpvar/contributions_calendar_data',
  scripts: [
    'http://code.jquery.com/jquery.js'
  ],
  done: function(errors, window) {

    // lolwhut
    var calArray = JSON.parse(window.document.body._childNodes['0'].__nodeValue),
        calLen = calArray.length;

    for (var i = 0; i < calLen; i++ ){
      // push the day height onto the list
      days.push(calArray[i][1]);
    };

    // array output to import into OpenSCAD
    // sadly OpenJSCAD did not want to accept an array of this length :(
    console.log(days.toString());
  }
});