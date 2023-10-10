class Vehicle {
    constructor(brand, model, licensePlate, wheels) {
        this.brand = brand;
        this.model = model;
        this.licensePlate = licensePlate;
        this.wheels = wheels;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getLicensePlate() {
        return this.licensePlate;
    }

    getWheels() {
        return this.wheels;
    }

    setBrand(brand) {
        this.brand = brand;
    }

    setModel(model) {
        this.model = model;
    }

    setLicensePlate(licensePlate) {
        this.licensePlate = licensePlate;
    }

    accident() {
        console.log(`The vehicle with brand ${this.brand} has had an accident.`);
    }

    static start(vehicle) {
        console.log(`The vehicle with license plate ${vehicle.getLicensePlate()} has started.`);
    }

    static getNumberOfWheels() {
        return 4;
    }

    static haveAccident(vehicle1, vehicle2) {
        vehicle1.accident();
        vehicle2.accident();
    }

    static createVehicle(brand, model, licensePlate, wheels) {
        return new Vehicle(brand, model, licensePlate, wheels);
    }

    static getBrandModel(vehicle) {
        return `Brand: ${vehicle.getBrand()}, Model: ${vehicle.getModel()}`;
    }

    getInfo() {
        return `${this.brand} ${this.model} (License Plate: ${this.licensePlate}, Wheels: ${this.wheels})`;
    }
}

const vehicleList = document.getElementById('vehicleList');

function addVehicle() {
    const brandInput = document.getElementById('brand');
    const modelInput = document.getElementById('model');
    const licensePlateInput = document.getElementById('licensePlate');
    const wheelsInput = document.getElementById('wheels');

    const brand = brandInput.value.trim();
    const model = modelInput.value.trim();
    const licensePlate = licensePlateInput.value.trim();
    const wheels = wheelsInput.value.trim();

    const licensePlateRegex = /^[0-9]{4}[BBB-ZZZ]{3}$/;
    const minWheels = 4;

    // Validation
    if (brand === '' || model === '' || wheels === '') {
        alert('Please fill in all the required fields.');
    } else if (!licensePlate.match(licensePlateRegex)) {
        alert('Error... Spanish License Plate format is invalid. It should be in the format of 4 digits followed by 3 letters (e.g., 1234BBB).');
    } else if (!wheels.match(minWheels)){
        alert("Error... Number of Wheels must be 4.")
    } else {
        const vehicle = new Vehicle(brand, model, licensePlate, wheels);

        const listItem = document.createElement('li');
        listItem.classList.add('vehicle-item');
        listItem.textContent = vehicle.getInfo();

        vehicleList.appendChild(listItem);

        // Reset
        brandInput.value = '';
        modelInput.value = '';
        licensePlateInput.value = '';
        wheelsInput.value = '';
    }
}

