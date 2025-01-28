import { Car } from './Car';


const carMake = prompt("Enter the car make:");
const carModel = prompt("Enter the car model:");
const carYear = parseInt(prompt("Enter the car year:") || "0");

if (carMake && carModel && !isNaN(carYear)) {
  const myCar = new Car(carMake, carModel, carYear);
  console.log(`Car Details: ${myCar.make}, ${myCar.model}, ${myCar.year}`);
  myCar.start();
} else {
  console.error("Invalid input. Please provide valid car details.");
}
