document.addEventListener('DOMContentLoaded',()=>{
    //select DOM items
    let box = document.getElementById('color-box');
    let btn = document.getElementById('change-color-btn')

    //function to get random color
    let getRandomColor = ()=>{
        //get random numbers
        let r = Math.floor(Math.random() * 256) ;
        let g = Math.floor(Math.random() * 256) ;
        let b = Math.floor(Math.random() * 256) ;
       
        return(`rgb(${r},${g},${b})`)
    }

    //listen for click btn
    btn.addEventListener("click", ()=>{
        box.style.backgroundColor = getRandomColor(),toString();
    })


})