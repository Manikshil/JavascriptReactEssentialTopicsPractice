function makeUppercase(value){

    console.log(value.toUpperCase());
}
//makeUppercase('manik');
function reverseString(value){
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb){
    const fullName = `${name} kumar`
    cb(fullName)
}

handleName('manik',makeUppercase)
handleName('manik',reverseString)
//arrary methods, setTimeout, event listeners etc 

