class Rat {
    constructor(name) {
        this.name = name;
        this.otherRats = [];
    }

    unite(otherRat){
        if (otherRat instanceof Rat) {
            this.otherRats.push(otherRat);
        }
    }

    getRats() {
        return this.otherRats;
    }

    toString() {
        let result = `${this.name}`;

        for (const rat of this.otherRats) {
            result += `\n##${rat.name}`;
        }

        return result;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
