
// private static variable/function
var dnaType = 'human';

var People = {
    // public static variables
    eyes: 2,

    // public static functions
    help: function(){
        console.log('eyes = ' + this.eyes);
        console.log('dnaType = ' + dnaType);
    },

    // constructors
    createNew: function(name){
        // private variables
        var _name = name;

        var people = {
            // public variables
            hobby: 'sleep',

            // public function
            show: function(){
                console.log('_name = ' + _name);
                console.log('public variables & methods:');
                for(var e in this){
                    console.log(e +' = '+this[e]);
                }
                console.log('----------------------');
            }
        };
        return people; // return new object
    }
};

module.exports = People;