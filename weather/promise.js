var asyncAdd = (a,b) =>{
return new Promise((resolve, reject) => {
setTimeout(() => {
    if(typeof(a) =='number' && typeof(b) =='number'){
      resolve(a + b);
    }else{
      reject('invalid characters');
    }
   
    },1500);
  });
};

asyncAdd(4,5).then((res) => {
    //console.log(res);
    return asyncAdd(res, 9);
}).then((res) => {
    console.log(res);
}).catch((errorMessage) =>{
    console.log(errorMessage);
});

/*
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        //resolve('Hey. It worked!');
        reject('Unable to fulfill promise');
    },2500);
    
});

somePromise.then((message) => {
    console.log('Sucess:', message);
}, (errorMessage) =>{
    console.log('Error:', errorMessage);
});

*/