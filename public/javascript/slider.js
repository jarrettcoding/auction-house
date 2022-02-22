const images = document.querySelectorAll("thumbnail");
let x = 0;
setInterval(()=> {
  if(x ===0) {
  imgEl.style.display ="block";
  } else if(x === imgEl.length) {
    imgEl[x-1].style.dsiplay ="none";
    imgEl[0].style.display = 'block';
    x = 0;
  } else {
    imgEl[x - 1].style.display= "none"; 
    imgEl[x].style.display = 'block';
  }
  x++
},2000)

