import {expect} from "chai";
import {Given, When, Then} from "cucumber";
import {Calculator} from "../../src/calculator";

Given("a calculator", function() {

    this.calculator = new Calculator();
    //throw new Error("Not Implemented");
});

When("I divide {int} by {int}", function(n1:number, n2:number) {
    this.actual = this.calculator.divide(n1, n2);
   //throw new Error("Not Implemented either");
});

Then("the result is {int}", function(expected: number) {
    console.log("actual: "+this.actual);
    console.log("expected: "+expected);
    expect(this.actual).to.be.equal(expected);
});