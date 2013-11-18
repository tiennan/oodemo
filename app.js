var OO = require('./oo.js');
OO.help();
var oo1 = OO.createNew('keke');
var oo2 = OO.createNew('andy');
oo2.hobby = 'coding';
oo1.hello();
oo2.hello();
