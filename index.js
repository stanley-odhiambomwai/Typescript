"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./Car");
var carMake = prompt("Enter the car make:");
var carModel = prompt("Enter the car model:");
var carYear = parseInt(prompt("Enter the car year:") || "0");
if (carMake && carModel && !isNaN(carYear)) {
    var myCar = new Car_1.Car(carMake, carModel, carYear);
    console.log("Car Details: ".concat(myCar.make, ", ").concat(myCar.model, ", ").concat(myCar.year));
    myCar.start();
}
else {
    console.error("Invalid input. Please provide valid car details.");
}
