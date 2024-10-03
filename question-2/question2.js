const resolvedPromise = () =>{
    return new Promise(function (resolve){
        setTimeout(()=>{
            resolve("delayed success");
        },500)
    })
}

const rejectedPromise = () =>{
    return new Promise(function (reject){
        setTimeout(()=>{
            reject("delayed exception");
        },500)
    })
}

resolvedPromise().then((value) => {
    console.log(value); 
});

rejectedPromise().then((error) => {
    console.log(error); 
});
