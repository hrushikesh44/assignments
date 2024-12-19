function promisifiedTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

function step1() {
    console.log("step 1 done");
    promisifiedTimeout(3000).then(step2);
} 

function step2() {
    console.log("step 2 done");
    promisifiedTimeout(5000).then(step3);
}

function step3() {
    console.log("step 3 done");
}

promisifiedTimeout(1000).then(step1);