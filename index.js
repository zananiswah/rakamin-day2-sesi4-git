import Animal from "./animal.js";
import Mammal from "./mammal.js";

const elephant = new Animal("Gajah", "Herbivore", true, 100, 100);
const tiger = new Animal("Tiger", "Carnivore", true, 50, 15);
const orangutan = new Mammal("Orangutan", "Omnivore", false, 200, 21);

console.log(orangutan.isAdult())

