//http://underscorejs.org/
//http://visionmedia.github.io/mocha/

//use whatever assert style you like
//http://chaijs.com/
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();


//JSHint Directives, You could but these as comments in your files or have a more project specific .jshintignore file
//http://jslinterrors.com/

//supress the warning about unnecessary semicolon
/*jshint -W032 */

//ignore dot notation
/*jshint -W069 */

describe('Language Basics', function() {

  describe('Short-Circuiting Expressions',function(){

    it('AND short circuit', function () {
        var lang = { name: "JavaScript" };
        var version = lang && lang.name && lang.version;

        assert(version == REPLACE_ME);
    });

    it('OR short circuit',function () {
        var lang = { name: "JavaScript", version: "1.8" };
        var version = lang && lang.version || "1.5";

        assert(version == REPLACE_ME);
    });

  });


  it('should contain the right array members', function(done) {
    var result = [ ];

    /* TODO, create 3 functions that makes the test pass
            * Function Declaration
            * Function Expression
            * Named Function Expression
    */


    var f1 = function(array) {
      for(var i = 0; i < 3; i++) {
        array.push(i);
      }
    };

    var f2 = function f2(array) {
      for(var i = 3; i < 6; i++) {
        array.push(i);
      }
    };

    function f3(array) {
      for(var i = 6; i < 9; i++) array.push(i);
    };

    f1(result);
    f2(result);
    f3(result);

    expect(f1).to.have.property('name');
    expect(f1.name).to.equal('');

    expect(f2).to.have.property('name');
    expect(f2.name).to.equal('f2');

    expect(result).to.have.length(9);
    expect(result).to.include.members( [0, 1, 2, 3, 4, 5, 6, 7, 8] );

    done();
  });
});

describe('Callback Functions', function() {
  it('should be called with a object and a callback/higher-order function',function(done) {

    var f1 = function( myObj, callback ) {
      assert.isObject(myObj);
      assert.isNumber(myObj.age);
      assert.isNumber(myObj["ssn"]);
      assert.isFunction(callback);
      done();
    };

    f1({age: 44, ssn: 23434}, function(){});
  });
});

describe('Function Hoisting', function() {
});

describe('Closures', function() {
});
