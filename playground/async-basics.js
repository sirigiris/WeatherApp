console.log('starting app');

setTimeout(() =>{
console.log('Inside of call back');
},2000)

setTimeout(()=>{
console.log('Inside of zero call back');
},0)


console.log('finish app');
