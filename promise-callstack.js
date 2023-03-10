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
// Promises are special objects in JS. When using promise contsructor or 'new Promise', there is executer function we write inside. This executer function has 2 functions as its arguments: resolve, reject. 
// These 2 are functions provided by JS, we just call it or pass the callbacks in them. Resolve func is for success / fulfilled
//   Reject func is for failed or error. But, 
 
// Promise States (Internal)
// -Pending: 
// -fulfilled:
// - rejected:
// fulfilled / rejected = Settled

//Result to expect
// undefined, value, error

// How to get informed
// promise API or object provides .then(), .catch(), .finally(), we chain these handlers on promise object. all these 3 gets callback function.
// We use promise handlers to chain on the object, and it returns 3 type of result:
 // 1. Return another promise, so we chain inter-relate 2 or more async operations.
 // 2. Return a synchronous value, in other words just a value without needing to async request.
//  3. Return / Throw an error

// .finally(fn) doesn't pass any result to the next handler. Difference between finally() and .then/.catch is it does not process the results. Others take the result and 
// another promise call making etc. But .finally() is used for clean-up operation. But, we still can chane .then() and .catch() to the .finally() handler.

const pro = new Promise((res, rej) => {
    const plant = {
        type: 'gas',
        time: 'stationary',
        level: 'medium',
    }
    if(plant.level !== 'medium') {
       res(plant)
    //rej(" this is the error")
    }
    throw new TypeError("Opps, we haven't got JSON!")
})

pro.then(function(pl){
    console.log(`This is the plant ${pl}`)
})
//pro.catch(()=> { console.log('error message')})
pro.finally(function(){
    console.log("done")
})
/*
done
(node:81103) UnhandledPromiseRejectionWarning: TypeError: Opps, we haven't got JSON!
*/

const pro = new Promise((res, rej) => {
    const plant = {
        type: 'gas',
        time: 'stationary',
        level: 'medium',
    }
    
    if(plant.level == 'medium') {
      res(10)
    //rej(" this is the error")
    }
    
    // throw new TypeError("Opps, we haven't got JSON!")
     
})

pro.then(function(pl){
    pl++;
  console.log(`This is the plant ${pl}`)
   return new Promise(function(res, rej) {
        res("works")
    })
  
}).then(function(value){
    console.log(value)
})
pro.then((value)=> {
    value++;
    console.log('second ' + value)
    return value
}).then((value)=> {
    value++;
    console.log('second ' + value)
    return value
}).then((value)=> {
    value++;
    console.log('second ' + value)
})
//pro.catch(()=> { console.log('error message')})
pro.finally(function(){
    console.log("done")
})

/* 
This is the plant 11
second 11
done
second 12
second 13
works
*/
