const prev = document.getElementById("prev");
const next = document.getElementById("next");
const imag = document.getElementById("image");
let res = []
function getImage() {
  fetch(`/api/products`).then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        imgArr(data);
      });
    } else {
      alert(res.statusText);
    }
  });

  imgArr = (data) => {
    let imArr = data.map(({ image, id }) => ({
      name: image,
      value: id,
    }));
     result = imArr.map(({ name }) => name);
     res = res.concat.result;
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
      let imgEl = document.createElement("img");
      imgEl.setAttribute("class", "thumbnail");
      imgEl.src = `/images/${result[i]}`;
      let imageEl = document.getElementById("preview");
      imageEl.appendChild(imgEl);
    }
  };
  imgArr();
}
console.log('new',res)

// next.onclick = function(){ 
//     let i = 0
//     let image = result;
//     console.log('new',image)
//     let imgEl = document.createElement("img");
//     imgEl.setAttribute("class", "thumbnail");
//     imgEl.src = `/images/${image}`;
//     imag.appendChild()
// }
getImage();

