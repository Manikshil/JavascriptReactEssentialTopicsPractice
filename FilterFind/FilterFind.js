// Filter - returns a new array , can manipulate the size of new array (unlike map), return based on condition 

// Find - returns single instance (object), returns first match, if no match-undefined 

const people = [
    {name:'bob', age:20, position:'developer'},
    {name:'peter', age:25, position:'designer'},
    {name:'susy', age:30, position:'the boss'},
    {name:'anna', age:35, position:'intern'},
    
]; 

const fruits = ['orange', 'pear', 'lemon'];




// Filter 

const  youngPeople =  people.filter((person)=>{

    return person.age<30; 
    // if(person.age < 30){
    //     return person;
    // }; 
});

console.log(youngPeople);

const developers = people.filter((person)=> person.position === 'developer');

console.log(developers);

// no match 

const seniorDevs = people.filter((item)=>item.position === 'senior dev')

console.log(seniorDevs);


// find 

const peter = people.find((person)=>person.name === 'peter');

console.log(peter);

const fruit = fruits.find((fruit)=>fruit === 'lemon');

console.log(fruit);

// no match 

const oldPerson = people.find((person)=> person.age > 25);

console.log(oldPerson); //undefined 


// multipe matched - first match 


const randomPerson = people.find((person)=> person.age <35 ); 

console.log(randomPerson);


