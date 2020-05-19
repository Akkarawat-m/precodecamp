class parrot {
    constructor(name, color, numLegs) {
        this.name = name
        this.color = color
        this.numLegs = numLegs
    }


    sayName() {
        console.log(parrot2.name);
    }
}

let parrot2 = new parrot('talky', 'red', 2)

parrot2.sayName()

console.log(parrot2 instanceof parrot)

let ownProps = [];

for (let property in parrot) {
    if (parrot.hasOwnProperty(property)) {
        ownProps.push(property)
    }
}

console.log(ownProps)

function parrot(name) {
    this.name = name
}
parrot.prototype.numLegs = 2;


let parrot3 = new parrot('bear');


class parrot { 
    constructor(name, color, numLegs) { t
        his.name = name 
        this.color = color 
        this.numLegs = numLegs } 
        
        sayName() { return "The name of this duck is " + this.name + "."; } }