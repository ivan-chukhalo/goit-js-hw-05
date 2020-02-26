"use strict";
console.log("________________task 5.5________________");

class Car {
  static getSpecs(car) {
    const ArrayOfStats = [];
    for (const stat of Object.keys(car)) {
      ArrayOfStats.push(`${stat}: ${car[stat]}`);
    }
    console.log(...ArrayOfStats);
  }

  constructor(objOfSettings) {
    this._maxSpeed = objOfSettings.maxSpeed;
    this._speed = 0;
    this._isOn = false;
    this._distance = 0;
    this._price = objOfSettings.price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    if (!this._isOn) {
      this._isOn = true;
    }
  }

  turnOff() {
    if (this._isOn) {
      this._isOn = false;
      this._speed = 0;
    }
  }

  accelerate(value) {
    if (this._speed + value <= this._maxSpeed) {
      this._speed += value;
    }
  }

  decelerate(value) {
    if (this._speed - value >= 0) {
      this._speed -= value;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
