var People = require('./people.js');
var Developer = require('./developer.js');
var Frontend = require('./frontend.js');

// call public static function
People.help();
//Developer.help(); // Error: can't call parent's static function
console.log(People.eyes); // 2
console.log(Developer.eyes); //undefined: can't get parent's static function

var tn1 = People.createNew('tiennan');
// set public variable
tn1.hobby = 'reading, eating, traveling';
tn1.show();

var tn2 = Developer.createNew('tiennan');
tn2.show();

var tn3 = Frontend.createNew('tiennan');
tn3.show();

var andy = Frontend.createNew('andy');
// set public variable
andy.skills.push('project management');
andy.show();


