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
  imgArr();
}


imgArr = (data) => {
  const imArr = data.map(({image, id }) => ({
    name: image,
    value: id,
  }));


  setInterval(() => {
    console.log(date)
  
    const result = imArr.map(({ name }) => name);
    for (let i = 0; i < result.length; i++) {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("class", "thumbnail");
      imgEl.src = `/images/${result[i]}`;
      let imageEl = document.getElementById("preview");
      imageEl.appendChild(imgEl);
    }
  }, 2000);
};


getImage();