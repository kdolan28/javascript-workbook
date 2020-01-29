class Person {
  constructor(iName, iHeight, iGender) {
    this.name = iName;
    this.height = iHeight;
    this.gender = iGender;
  }
  generateHi() {
    return `Hi my name is ${this.name}`;
  }

  getNiceHeight() {
    let inches = this.height % 12;
    let feet = (this.height - inches) / 12;
    return `${feet} feet ${inches} inches`;
  }
}

let me = new Person();
me.name = "Yousif";
me.height = 65;
me.gender = "Male";

console.log(me.generateHi());
console.log(me.name, "is", me.getNiceHeight(), "tall.");

let kyle = new Person("Kyle", 70, "Male");
console.log(kyle.generateHi());

//make a class that represents an address
//make a class that represents a driver license

//street address
//city, state, zip

class Address {
  constructor(iLine1, iCity, iState, iZip) {
    this.line1 = iLine1;
    this.city = iCity;
    this.state = iState;
    this.zip = iZip;
  }

  generateString() {
    return `${this.line1}
${this.city}, ${this.state} ${this.zip}`;
  }
}

class DL {
  constructor(iName, iNumber) {
    this.name = iName;
    this.number = iNumber;
    this.address = new Address("1234 Main Street", "Austin", "TX", "78704");
  }

  //method that updates the address for a Dl
  //mthod should take in an ddress
  //method should be called updateAddress
  updateAddress(someAddress) {
    this.address = someAddress;
  }
}

let school = new Address("314 Highland Mall Blvd", "Austin", "TX", "78752");
console.log(school.generateString());

let d1 = new DL("John Doe", "145728");
d1.updateAddress(school);
console.log(`${d1.name} lives at ${d1.address.generateString()}`);
