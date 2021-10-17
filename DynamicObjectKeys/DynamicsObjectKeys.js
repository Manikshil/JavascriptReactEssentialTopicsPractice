//dot notation 

const person = {
    name:'john',
};

//console.log(person.name);

person.age = 25;

//console.log(person);

// square baracket notation 

const items = {
    'featured-items':['item1','item2']

}
// console.log(items['featured-items']);
// console.log(person['name']);

let appState = 'loading';

const app ={
    [appState]:true

}



const state = {

    loading:true,
    name:'',
    job:'',
}

function updateState(key, value){
    state[key]=value
}

updateState('name','john');
updateState('job','developer');
updateState('loading', false);
updateState('products',[])

console.log(state);

