//spread oeprator 
// allows and interate to spread/expand individually inside receiver 

//split into single items and COPY them 

const udemy = 'udemy';
const letters = [...udemy];

//console.log(letters);


const boys = ['john','peter','bob'];
const girls = ['susan','anna'];

const bestFriend = 'arlond'; 

const friends = [...boys,...girls, bestFriend];

//console.log(friends);



//reference 
//copy 

const newFriends = [...friends]; 
 newFriends[0] ='nancy';
 console.log(friends);
 console.log(newFriends);


// ES2018 - ES8 Objects 

const person = {name:'john', job:'developer'};

 const newPerson = {...person, city:'natore'};
  console.log(person);
  console.log(newPerson);

