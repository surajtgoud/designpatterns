//This pattern is simplest , modern and one of the most popular sub-category of creational design pattern
//The main purpose of this pattern is to felicitate the constructor creation.

class Automobile {
  constructor(brand, mileage) {
    this.brand = brand;
    this.mileage = mileage;
    this.getDetail = function () {
      console.log(`${this.brand} gives ${this.mileage} kmpl`);
    };
  }
}

const automobile1 = new Automobile("mercedes", 21);

console.log(automobile1.getDetail());
