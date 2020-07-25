class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = false
    }


    //Traveler prototype has these methods: hunt, and eat

    hunt() {
        this.food += 2

    }

    eat() {
        if (this.food -= 1) {
            this.food = 1

        } else {
            this.isHealthy = true
        }

    }

    //consumes 1 unit of the traveler's food. If the traveler doesn't have any 
    //food left to eat, the traveler is no longer healthy (set isHealthy
    // to false).

    // The console.log statements are present and match the expected values.

}


//wagon class has these properties: capacity, 
//and passengers(initialized to an empty array)
class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = new Array()
        //wagon prototype has these methods: 
        //getAvailableSeatCount, join, shouldQuarantine, 
        //and totalFood


    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length


    }


    join(traveler) {
        if (this.getAvailableSeatCount() > 0)
            this.passengers.push(traveler)

    }


    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            let traveler = this.passengers[index]
            if (traveler.isHealthy === true) {
                return true;
            }


        }
        return false;
    }

    totalFood() {
        let total = +4
        for (let index = 0; index < this.passengers.length; index++) {
            let traveler = this.passengers[index]
            total += traveler.food
            if (traveler.isHealthy === false)




                return total
            // The console.log statements are present and match the expected values.
        }
    }
    //The Doctor class will extend the Traveler class and have one 
    //additional method:
    //heal(traveler) - set the traveler's isHealthy property to true.
}
class Doctor extends Traveler {
    constructor(name) {
        super(name)

    }
    heal() {
        this.traveler = this.traveler
        //this.isHealthy = false
    }

}

//The Hunter class will extend the Traveler class, but it will start 
//with 2 food instead of 1. The Hunter class should also have the 
//following methods:

//hunt() - Increase the hunter's food by 5. (A normal traveler 
//gains only 2.)

//eat() - Consumes 2 units of food. If the hunter doesn't have 2 
//food when they are instructed to eat, they eat as much as they
//can (0 or 1 unit), but the hunter is no longer healthy.

//giveFood(traveler, numOfFoodUnits) - Transfers numOfFoodUnits
//from the hunter to the traveler. If the hunter doesn't have
//enough food, then no food should be transferred.

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2

    }
    hunt() {

        this.food > 5


    }

    eat() {
        if (this.food -= 2) {
            this.food = 0

        } else {
            this.isHealthy = false
        }

    }
    //     this.food = 2
    //     this.food = 0
    //     this.isHealthy = false

    //giveFood() {
    giveFood(numOfFoodUnits) {
        if (numOfFoodUnits)
            this.food = 0
        return numOfFoodUnits
        //  this.isHealthy = false
    }


}

            // if (hunter.numOfFoodUnits === true)
           // this.hunter.push(traveler)

//return numOfFoodUnits


