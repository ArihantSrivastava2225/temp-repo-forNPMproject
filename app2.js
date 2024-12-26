// console.log('first-task')
// console.time()
// for(let i=0; i<100; i++){
//     const h3 = document.querySelector('h3');
//     h3.textContent = `Hey, everyone is waiting on me`
// }
// console.timeEnd()
// console.log('next task')

// first-task
// app2.js:7 default: 0.818115234375 ms
// app2.js:8 next task

//This shows that Javascript is Synchronous and Single Threaded, i.e. it reads code line by line. Here it will print 'next task' after it has performed here the before given console.log() and for loop statements
//Now we can't offload the for loop tasks but in javascript we can provide some block of codes which help us to offload before given tasks and move onto the next task which the the before task keeps running backstage. for eg:

console.log('first task');
setTimeout(()=>{
    console.log('second task');
}, 0)
console.log('next task')

// first task
// app2.js:21 next task
// app2.js:19 second task

//here even when time given is 0, bit still javascript will first execute next step and then callback to our second task. Like this we can offload time consuming tasks from our browser and continue without breaks

//Event loop registers the callback and only when the operation is complete, and we have ,it executes our callback. 
//Thus running our immediate tasks first and then running the callbacks

const { readFile } = require('fs')
// import readFile from 'fs'
console.log('started a first task')
//CHECK FILE PATH!!
readFile('../../pathModule/content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    //we don't need else block here as here if we go under if block then we have provided there return statement
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')

// started a first task
// starting next task
// second task
// Hello this is first text file
// completed first task