
var Frontend = {
    createNew: function(name){ // extends developer
        var frontend = require('./developer.js').createNew(name);

        // override parent's public function
        frontend.coding = function(){
            console.log("<script>alert('hello world');</script>");
        };

        // add public variable
        frontend.skills = ['html', 'css', 'javascript'];

        return frontend;
    }
};
module.exports = Frontend;