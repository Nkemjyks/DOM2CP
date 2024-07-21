let x = Math.random()
console.log(x);
console.log(.99999999999999999*256);
console.log(Math.floor(.9999999999999999*256));

let getRandomColor = ()=>{
    //get random numbers
    let r = Math.floor(Math.random() * 256) ;
    let g = Math.floor(Math.random() * 256) ;
    let b = Math.floor(Math.random() * 256) ;
   
    return(`rgb(${r},${g},${b})`)
}
console.log(getRandomColor());