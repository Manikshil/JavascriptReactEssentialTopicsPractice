   
// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, ...restOfTheFruits] = fruits;
//console.log(first, rest);
const specificFruit = restOfTheFruits.find((fruit)=> fruit === 'lemon');

//console.log(specificFruit);


// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const {lastName, ...rest} = person;
//console.log(lastName, rest);


//functions

const getAvg = (name, ...scores)=>{

    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item)=>{return total += item},0)/scores.length; 
    console.log(average);

}
const testScores = [23, 45, 67, 87, 89];

getAvg(person.name, ...testScores);











