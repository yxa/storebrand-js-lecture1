//http://underscorejs.org/
//http://visionmedia.github.io/mocha/


//JSHint Directives, You could but these as comments in your files or have a more project specific .jshintignore file
//http://jslinterrors.com/

//supress the warning about unnecessary semicolon
/*jshint -W032 */

//ignore dot notation
/*jshint -W069 */


// http://chaijs.com/
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();


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


  //All other values are truthy, including "0" (zero in quotes), "false" (false in quotes), empty functions, empty arrays, and empty objects.
  describe('Falsy Values',function(){
    it("Name all falsy values", function () {
        // Use each value only once ;)
        assert(!REPLACE_ME);
        assert(!REPLACE_ME);
        assert(!REPLACE_ME);
        assert(!REPLACE_ME);
        assert(!REPLACE_ME);
        assert(!REPLACE_ME);
    });
  });


  it('Demonstrates Pass By X', function(done) {
    var myFunction = function(x) {
        x = 5;
    };

    var x = 4;
    myFunction(x);
    assert(x === REPLACE_ME);
    done();
  });


  it('Demonstrates Pass By X', function(done) {
      var myObj = { age: 31};

      var myFunction = function fooBar(obj) {
          obj.age += 1;
          return "foobar";
      };

      myFunction(myObj);
      assert(myObj.age === REPLACE_ME);
      done();
  });




  it('should contain the right array members', function(done) {
    var result = [ ];

    /* TODO, create 3 functions that makes the test pass
            * Function Declaration
            * Function Expression
            * Named Function Expression
    */

    f1();
    f2(result);
    f3();

    expect(f1).to.have.property('name');
    expect(f1.name).to.equal('');

    expect(f2).to.have.property('name');
    expect(f2.name).to.equal('f2');

    expect(result).to.have.length(9);
    expect(result).to.include.members( [0, 1, 2, 3, 4, 5, 6, 7, 8] );

    done();
  });
});

describe('Callback Functions', function(done) {
  it('should be called with a object and a callback/higher-order function',function(done) {

    var f1 = function( myObj, callback ) {
      assert.isObject(myObj);
      assert.isNumber(myObj.age);
      assert.isString(myObj["social-security-number"]);
      assert.isFunction(callback);
      done();
    };

    f1();
    done();
  });
});

describe('Function Hoisting', function() {
});

describe('Closures', function() {
});
