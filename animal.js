class Animal{
    #age
    constructor(name, food, canReproduce, energy, age){
        this.name = name;
        this.food = food;
        this.canReproduce = canReproduce;
        this.energy = energy;
        this.age = age;

        this.#age = 20;
    }

    getAge(){
        return this.#age
    }

//tell dont ask
    isAdult(){
        return this.#age > 18
    }

}

export default Animal;