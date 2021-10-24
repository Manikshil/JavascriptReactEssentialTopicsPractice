//async/await 
// async must be present always retunrs a promise 
// await waits till promise is settled
// error handling-try/catch block 

const example = async ()=>{
    return 'hello there'
};

async function someFunc(){
     const result = await example()
     console.log(result);
}
someFunc();

//console.log(example);

 
const users = [
    {id:1, name: 'john'},
    {id:2, name:'susan'},
    {id:3, name:'anna'},
];
  
const articles = [
    {userId:1, articles:['one', 'two','three']},
    {
     userId:2, articles:['four','five']
    },
    {
     userId:3, articles:['six', 'seven','eight']
    },
];

const getData = async ()=>{
    const user = await getUser('john')
   // console.log(user);
   if(user){
       const articles = await getArticles(user.id)
       console.log(articles);
       
   }
}

getData()

// getUser('susan')
// .then((user)=>getArticles(user.id))
// .then((articles)=>console.log(articles))
// .catch((err)=>console.log(err))




function getUser(name) {
    return new Promise((resolve, reject) =>{
        const user = users.find((user)=> user.name === name)

        if(user){
            return resolve(users)

        }else{
            reject(`No such user with name: ${name}`)
        }
    })
}


function getArticles(userId) {
    return new Promise((resolve, reject) =>{
        const userArticles = users.find((user)=> user.userId === userId)

        if(userArticles){
            return resolve(userArticles.userArticles)

        }else{
            reject('wrong ID')
        }
    })
}