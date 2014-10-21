var expect = require('chai').expect

/* Fizzbuzz assignment

- fizzbuzz should return fizz for numbers that are divisible by 3
- fizzbuzz should return buzz for numbers taht are divisible by 5
- fizzbuzz should return fizzbuzz for numbers taht are divisible by 3 and 5
- fizzbuzz should return the number given if it does not meet one of the above  rules

*/
function fizzbuzz (number) {
  if (number % 15 === 0) {
    return 'fizzbuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return number;
}
// Write your code here inside fizzbuzz()


// Write tests here to drive out the behavior of fizzbuzz
// There must be atleast 5 tests in total when you are done
/*
    Remember - Red/Green/Refactor
    - You are not allowed to write any code unless it is to make a failing test pass.
    - You are not allowed to write any more of a test than is sufficient to fail.
    - You are not allowed to write any more production code than is sufficient to pass the one failing test.

*/
describe('Fizzbuzz', function () {

  it('should exist', function () {
    expect(fizzbuzz).to.exist;
  });

  it('should return "fizz" for any number divisible by 3', function () {
    expect(fizzbuzz(3)).to.equal('fizz');
  });

  it('should return "buzz" for any number divisible by 5', function () {
    expect(fizzbuzz(5)).to.equal('buzz');
  });

  it('should return "fizzbuzz" for any number divisible by 3 AND 5', function () {
    expect(fizzbuzz(15)).to.equal('fizzbuzz');
  });

  it('else it should return the inputed number', function () {
    expect(fizzbuzz(16)).to.equal(16);
  });

});

/*
it('should return 2 if given 2', function () {
      expect(fizzbuzz(2)).to.equal(2);
  });

  it('should return fizz if given 3', function () {
      expect(fizzbuzz(3)).to.equal('fizz');
  });

  it('should return buzz if given 5', function () {
      expect(fizzbuzz(5)).to.equal('buzz');
  });

  it('should return fizzbuzz if given 15', function () {
      expect(fizzbuzz(15)).to.equal('fizzbuzz');
  });
*/
