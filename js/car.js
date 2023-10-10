class Car extends Vehicle {
    constructor(brand, model, licensePlate, wheels, chassisNumber) {
        super(brand, model, licensePlate, wheels);
        this.chassisNumber = chassisNumber;
    }

    getChassisNumber() {
        return this.chassisNumber;
    }

    setChassisNumber(chassisNumber) {
        this.chassisNumber = chassisNumber;
    }

    static getNumberOfWheels() {
        return 4;
    }

    static getBrandModel(vehicle) {
        return `Brand: ${vehicle.getBrand()}, Model: ${vehicle.getModel()}`;
    }

    static start(car) {
        console.log(`The car with license plate ${car.getLicensePlate()} has started.`);
    }

    static hasAccident(car) {
        console.log(`The car with brand ${car.getBrand()} has had an accident.`);
    }

    static createCar(brand, model, licensePlate, wheels, chassisNumber) {
        return new Car(brand, model, licensePlate, wheels, chassisNumber);
    }
}

const Galaxy = Car.createCar("Ford", "Galaxy", "9164BGN", 4, "12345ABC");
console.log(Galaxy);
Car.start(Galaxy);
Car.hasAccident(Galaxy);