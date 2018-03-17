console.log('sera?');
var msglogger = require('../serverjs/messagelogger.js');
module.exports.sera = function(msg){ console.log(msg)};


function Tree(t) {
  this["associado?"] = t;
}

var theTree = new Tree('Redwood');
console.log(theTree);

// function main(t){
//     this["associado?"]  = true;
// }

var array = [];

for(i = 0 ; i < 10 ; i++){
    array.push(new Tree(true));
}

for(i = 0 ; i < 10 ; i++){
    console.log(array[i]["associado?"]);
}
var menino  =
    {
	"associado?": true,
    };

console.log(menino['associado?']);
