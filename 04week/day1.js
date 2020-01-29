function print(element, index) {
  console.log(`${element} is at ${index}`);
}

function writeSimpleLetter(element, index, array) {}

let array1 = ["jack", "john", "james", "justin", "jared"];

//array1.forEach(print);
//array1.forEach(writeSimpleLetter);

let leads2 = [
  {
    name: "Jack Black",
    role: "Engineering Manager",
    phone: "512-555-7789",
    email: "jack@company.com",
    company: "ACME LLC"
  },

  {
    name: "John Doe",
    role: "Engineering Manager",
    phone: "512-555-7789",
    email: "john@company.com",
    company: "Rent A Coder LLC"
  }
];

function personalLetter(element, index) {
  console.log(`
      Hi ${element.name},
      I understand that you are the ${element.name} at ${element.company}.  `);
}

leads2.forEach(personalLetter);

function forEach(array, callback){
  for(let i=0,)
}