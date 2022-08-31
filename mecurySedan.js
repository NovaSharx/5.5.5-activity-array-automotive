//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
//const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

class Car extends Vehicle {
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
        this.availableRoom = null
        this.timeForMaintenance = false
    }

    loadPassenger(num) {
        this.passenger = num
        if (this.passenger < this.maximumPassengers) {
            this.availableRoom = true
        }
        else {
            this.availableRoom = false
        }
        return this.availableRoom
    }

    start() {
        return this.fuel > 0
    }

    scheduleServ(mileage) {
        if (mileage > 30000) {
            this.timeForMaintenance = true
        }
        else {
            this.timeForMaintenance = false
        }
        return this.timeForMaintenance
    }
}

let testCar = new Car()

console.log(testCar.loadPassenger(3))
console.log(testCar.start())
console.log(testCar.scheduleServ(30000))