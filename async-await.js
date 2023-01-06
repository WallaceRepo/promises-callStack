// aync function alway return Promise(). JS wraps return
// in the Promise.
// few rules to write Async function
// 1. Write await only inside async func.
// 2. function after await can be async or not async function.
// 
async function fetchID() {
    
    return {
        'name':'robin',
        'like':['pizza']
    }
}
async function caller() {
    const user = await fetchID();
    console.log(user)
}
caller()
function setHeight(){
    return "Hi"
}

async function calculate(){
    const message = await setHeight();
    console.log(message)
}
calculate();

// error handling in async / await
const addUser = ({user, email})=> {
    return new Promise((res,rej) => {
        if(user && email) {
            res('Accepted')
        } else {
            rej({message: 'user or email is missing'})
        }
    })
}

const app = async () => {
    const data = {
        user:'',
        email:''
    }
    try {
         const result = await addUser(data)
         console.log(result)
    }
    catch(e){
        console.log(e.message)
    }
  }
app();
/*
{ name: 'robin', like: [ 'pizza' ] }
Hi
user or email is missing
*/
