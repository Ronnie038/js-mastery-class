// Promise
console.log("script start");
const bucket = ['coffee', 'chips','salt', 'vegetables','rice'];

const friedrice = new Promise((resolve, reject) => {
    if (bucket.includes('vegetables')&& bucket.includes('salt')&& bucket.includes('rice')) {
        resolve({ value: 'friedrice' })
    } else (
        reject("couldn't make it")
    )
});

friedrice.then(
    (myFriedRice)=> console.log("let's it ",myFriedRice.value)).catch((error) =>console.log(error))


// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })

// // produce 



// // consume 
// // how to consume 

// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })


// setTimeout(()=>{
//     console.log("hello from settimeout")
// },0)

// for(let i = 0; i <=100; i++){
//     console.log(Math.random(), i);
// }

// console.log("script end!!!!")