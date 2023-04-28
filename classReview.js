

class Vehicle {
	constructor(newName){
		this.name = newName;
	}

	someFunction() {
		console.log("hello world from class");
	}
}

let someObject = {
	someFunction: () => {
		console.log("hello world from object");
	}
}

someObject.someFunction();
let vehicleInstance = new Vehicle("Warthog");
vehicleInstance.someFunction();
console.log(vehicleInstance.name);
//Vehicle.someFunction();

class Motorbike extends Vehicle {
	constructor(newWheelCount, newName){
		super(newName);

		this.wheelCount = newWheelCount;
		
	}
}

class Sidecar {
	constructor(){
		this.passengerCount = 1;
	}
}

class MotorbikeWithSidecar extends Motorbike {
	constructor(newWheelCount, newName){
		super(newWheelCount, newName);
		this.sideCar = new Sidecar();
	}
}

// throw new Error("Some error")

// class SomeCustomError extends Error {}

// throw new SomeCustomError("Some custom error");



let MotorbikeInstance = new Motorbike(3, "Harley Davidson");
console.log(`I am a ${MotorbikeInstance.name} and I have ${MotorbikeInstance.wheelCount} wheels.`);

let motorbikeWithSideCar = new MotorbikeWithSidecar(3, "Some Fancy Motorbike");
console.log("This motorbike has passenger count of: " + motorbikeWithSideCar.sideCar.passengerCount);