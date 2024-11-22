"use strict";
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log("Car engine started");
  }
}
const myCar = new Car("Toyota", "Camry", 2021);
myCar.start();
