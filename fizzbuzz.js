var expect = require('chai').expect

/* Fizzbuzz assignment

- fizzbuzz should return fizz for numbers that are divisible by 3
- fizzbuzz should return buzz for numbers taht are divisible by 5
- fizzbuzz should return fizzbuzz for numbers taht are divisible by 3 and 5
- fizzbuzz should return the number given if it does not meet one of the above  rules

*/
function fizzbuzz(number) {

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

    it('NEXT TEST GOES HERE', function () {
        expect()
    });

});
