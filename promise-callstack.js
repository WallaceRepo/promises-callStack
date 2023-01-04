const promise = new Promise(function(resolve, reject){
    let value = 'water'
    resolve(value);
});

const cooking = () => {
    promise.then(function(result){
        console.log(`Nice cooking ${result}`)
    })
}
cooking()

const promise1 = new Promise(function(resolve,reject){
    reject(new Error('Water well was empty'))
})

const cooking1 = () => {
  promise1.catch(function(result){
        console.log(`Cooking was not done ${result}`)
    })
}
cooking1()
// Promises are special objects in JS. When using promise contsructor or 'new Promise', there is executer function we write inside. This executer function has specific signature, resolve, reject as argument. These are functions provided by JS, we just call it or pass the callbacks in them. Resolve func is for success / fulfilled
//   Reject func is for failed or error. 
 
// Promise States (Internal)
// -Pending: 
// -fulfilled:
// - rejected:
// fulfilled / rejected = Settled

//Result to expect
// undefined, value, error

// How to get informed
// promise API or object provides .then(), .catch(), .finally(), all these 3 gets callback function.
