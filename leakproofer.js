/**
 * A proof-of-concept for a system to help determine who leaked confidential information from a group.
 */
 var fs = require('fs');
 var LeakProofer = require('./leakproof.js');

 var leakProofer = new LeakProofer();

 console.log("Leakproof v0.1");

 var filename = process.argv[0];

 var textInput = fs.readFileSync(filename, "utf-8");

 console.log("=======");
 console.log("Input:");
 console.log(textInput);


 LeakProofer.parse(textInput);


 console.log("=======");
 console.log("Output:");
 console.log(LeakProofer.toString());
