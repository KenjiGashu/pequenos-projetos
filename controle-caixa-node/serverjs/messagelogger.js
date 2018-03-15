module.exports.debug=true;
module.exports.nodebug=false;
module.exports.debugmode = false;

module.exports.tratarmsg = function(msg, modo = false){
    if(modo && this.debugmode){
	console.log(msg);
    } else if(!modo){
	console.log(msg);
    }
};
