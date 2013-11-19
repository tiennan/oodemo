
var Developer = {
    createNew: function(name){ // extends people
        var developer = require('./people.js').createNew(name);

        // add public function
        developer.coding = function(){
            console.log('hello world!');
        };

        return developer;
    }
};
module.exports = Developer;