

let btn = document.querySelector(".btn");

btn.addEventListener("click", function() {

   let randomColorArray = generateColor();
   console.log(randomColorArray[0], randomColorArray[1]);
   


   let h1 = document.querySelector("h1");
   h1.innerText = randomColorArray[0];

   let div = document.querySelector(".color_div");
   div.style.backgroundColor = randomColorArray[0];
   div.style.border =   "5px solid rgb(255, 255, 255)" ;

   let main = document.querySelector("body");
   main.style.backgroundColor = randomColorArray[1];

 })


const generateColor = ()=>{
    
    let red = Math.floor(Math.random() * 255);// 35
    let green = Math.floor(Math.random() * 255); // 50 
    let blue = Math.floor(Math.random() * 255); // 65

 

    let randomColor = `rgb(${red},${green},${blue})`; //rgb(35, 50, 65)
   
    let randomColor2 = `rgb(${red-100},${green-100},${blue-100})`;
     let randomColorArray = [randomColor, randomColor2];
    return randomColorArray;
}