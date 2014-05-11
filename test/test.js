/**
 * Tests for the Leakproof leak detection protection.
 */
var LeakProofer = require('../leakproof.js');

// Test parsing and reassembling a string.
exports['test textParsing#string'] = function(beforeExit, assert){
  var leakproofer = new LeakProofer();

  var input = "This is a test, but only a test.";

  leakproofer.parse(input);

  console.dir(leakproofer);

  var output = leakproofer.toString();

  assert.equal(input, output);
};

// Test parsing and reassembling a file.
exports['test textParsing#file'] = function(beforeExit, assert){

    // var leakproofer = new LeakProofer();
    //
    // var input = fs.readFileSync(filename, "utf-8");
    //
    // LeakProofer.parse(input);
    //
    // var output = LeakProofer.toString();
    //
    // assert.equal(input, output);
};
