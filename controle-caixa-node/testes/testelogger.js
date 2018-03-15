var logger = require('../serverjs/messagelogger.js');


console.log('testelogger:: debug: ' + logger.debug);
console.log('testelogger:: nodebug: ' + logger.nodebug);
console.log('testelogger:: debugmode: ' + logger.debugmode);
logger.debugmode=true;
console.log('debug mode activate!');
console.log('testelogger:: debugmode: ' + logger.debugmode);
logger.debugmode=false;
console.log('debug mode deactivated!');
console.log('testelogger:: debugmode: ' + logger.debugmode);


logger.tratarmsg('oi', logger.debug);
logger.debugmode=logger.debug;
logger.tratarmsg('tchau', logger.debug);

logger.tratarmsg('interessante');
