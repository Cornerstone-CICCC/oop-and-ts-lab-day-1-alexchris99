class Animal {
    //static
    static remainingAnimals = 0
    // private
    #name
    #species
    #energy

    constructor(name,species,energy){
        this.#name = name
        this.#species = species
        this.#energy = energy
        // counts for animals
        Animal.remainingAnimals++
    }

    // SET AND GET
    // name mods
    get name(){
        return this.#name
    }

    set name(newName){
        this.#name = newName
    }
    // specie mods
    get species(){
        return this.#species
    }

    set species(newSpecie){
        this.#species = newSpecie
    }
    // energy mods
    get energy(){
        return this.#energy
    }

    set energy(newEnergy){
        this.#energy = newEnergy
    }
    
    //methods
    attack(target){
        this.#energy -= 10
        target.energy -= 10
        if(target.#energy <= 0){
            console.log(`${this.#name} has won the batle`)
            Animal.remainingAnimals-1
        }
    }

    eat(){
        this.#energy += 10
    }
}

class Bird extends Animal {
    #canfly 
    constructor(name,species,canFly){
        super(name,species,100)
        this.#canfly = canFly
    }

    //Setters and Getters
    get canFly(){
        return this.#canfly
    }

    
    //method
    attack(target){
        if(target.energy <=0 || this.energy <= 0){
            console.log("Attack in not posible")
        }else{
            this.energy -= 20
            target.energy -= 20
            console.log(`${this.name} attacked ${target.name}`)
            console.log(`${this.name} has ${this.energy} // ${target.name} has ${target.energy} energy remmaining`)
            console.log('---------------------------------')
            if(this.energy <= 0){
                console.log(`Animal ${target.name} won the battle`)
                console.log(`Animal ${this.name} loss`)
                Animal.remainingAnimals-=1
                console.log('---------------------------------')
            }
            if(target.energy <= 0){
                console.log(`Animal ${this.name} won the battle`)
                console.log(`Animal ${target.name} loss`)
                Animal.remainingAnimals-=1
                console.log('---------------------------------')
            }
        }
    }

    eat(){
        if(this.energy > 0){
            this.energy += 10
            console.log(`${this.name} is eatting energy recovered +10`)
            console.log(`${this.name} has ${this.energy} energy`)
            console.log('---------------------------------')
        }else{
            console.log(`${this.name} is not longuer with us`)
            console.log('---------------------------------')
        }
    }
}

class Mammal extends Animal {
    #furcolor
    constructor(name,species,fur){
        super(name,species,200)
        this.#furcolor = fur
    }

    //Setters and Getters
    get furColor(){
        return this.#furcolor
    }

    //methods
    attack(target){
        if(target.energy <=0 || this.energy <= 0){
            console.log("Attack in not posible")
        }else{
            this.energy -= 20
            target.energy -= 20
            console.log(`${this.name} attacked ${target.name}`)
            console.log(`${this.name} has ${this.energy} // ${target.name} has ${target.energy} energy remmaining`)
            console.log('---------------------------------')
            if(target.energy <= 0){
                console.log(`Animal ${this.name} won the battle`)
                console.log(`Animal ${target.name} loss`)
                Animal.remainingAnimals-=1
                console.log('---------------------------------')
            }
            if(this.energy <= 0){
                console.log(`Animal ${target.name} won the battle`)
                console.log(`Animal ${this.name} loss`)
                Animal.remainingAnimals-=1
                console.log('---------------------------------')
            }
        }
    }

    eat(){
        if(this.energy > 0){
            this.energy += 20
            console.log(`${this.name} is eatting energy recovered +10`)
            console.log(`${this.name} has ${this.energy} energy`)
            console.log('---------------------------------')
        }else{
            console.log(`${this.name} is not longuer with us`)
            console.log('---------------------------------')
        }
    }
}

class Reptile extends Animal {
    #cooldBlodded
    constructor(name,species,blod){
        super(name,species,200)
        this.#cooldBlodded = blod
    }

    //Setters and Getters
    get coldBlooded(){
        return this.#cooldBlodded
    }

    attack(target){
        if(target.energy <=0 || this.energy <= 0){
            console.log("Attack in not posible")
        }else{
            this.energy -= 30
            target.energy -= 30
            console.log(`${this.name} attacked ${target.name}`)
            console.log(`${this.name} has ${this.energy} // ${target.name} has ${target.energy} energy remmaining`)
            console.log('---------------------------------')
            if(target.energy <= 0){
                console.log(`Animal ${this.name} won the battle`)
                console.log(`Animal ${target.name} loss`)
                Animal.remainingAnimals-=1
                console.log('---------------------------------')
            }
            if(target.energy <= 0){
                console.log(`Animal ${target.name} won the battle`)
                console.log(`Animal ${this.name} loss`)
                Animal.remainingAnimals-=1
                console.log('---------------------------------')
            }
        }
    }

    eat(){
        if(this.energy > 0){
            this.energy += 15
            console.log(`${this.name} is eatting energy recovered +10`)
            console.log(`${this.name} has ${this.energy} energy`)
            console.log('---------------------------------')
        }else{
            console.log(`${this.name} is not longuer with us`)
            console.log('---------------------------------')
        }
    }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);
snake.attack(eagle)
lion.attack(eagle);
lion.attack(eagle);
lion.attack(eagle);



// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);
console.log('---------------------------------')

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
