class Cars {
  constructor(engineSize, capacity, make, model) {
    this.engineSize = engineSize;
    this.capacity = capacity;
    this.make = make;
    this.model = model;
  }

  //A Ford Focus with a 4 cylinder engine
  //A Ford F-150 with an 8 cylinder engine

  description() {
    return `A ${this.make} ${this.model} has a ${this.engineSize} cylinder engine with ${this.capacity} person passenger capacity.`;
  }
}

let mine = new Cars(4, 5, "Mazda", "3");
console.log(mine.description());

class Trucks extends Cars {
  constructor(bedSize, engineSize, capacity, make, model) {
    super(engineSize, capacity, make, model);
    this.bedSize = bedSize;
  }
}

class Sedan extends Cars {
  constructor(isHatchBack, engineSize, capacity, make, model) {
    super(engineSize, capacity, make, model);
    this.isHatchBack = isHatchBack;
  }
}
