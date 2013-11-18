
// private static variable/function
var _secret = 'zk is cool';
// ------

var OO = {
    // public static variables
    version: '1.0',
    // ------

    // constructors
    createNew: function(name){
        // private variables
        var _name = name;
        // ------

        var object = {
            // public variables
            hobby: 'dota',
            // ------

            // public function
            hello: function(){
                console.log('hello world, ' + _name);
                console.log('hobby = ' + this.hobby);
            }
            // ------
        };
        return object; // return new object
    },
    // ------

    // public static functions
    help: function(){
        console.log('javascript minimalist approach in Node.js');
        console.log('verson = ' + this.version);
        console.log('_secret = ' + _secret);
    }
    // ------
}

module.exports = OO;