const counter = document.querySelector(".counting");
const img = document.querySelector('img')

let start = 0;
let blurValue = 8;

// clearInterval(counterTimer)

window.addEventListener("load", loading);
function loading() {
  const counterTimer = setInterval(count, 50);
  function count() {

    if (start <= 100) {
      counter.textContent = start;
    }
    
     else {
        counter.style.opacity = '0'
    clearInterval(counterTimer)
    }
    start++;
    img.style.filter= `blur(0px)`
console.log(start)
  }

  }
  
