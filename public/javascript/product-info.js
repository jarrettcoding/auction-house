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
      console.log(data)
    imArr = data.map(({ image, id }) => ({
      name: image,
      value: id,
    }));

    setInterval(() => {
      result = imArr.map(({ name }) => name);
      for (let i = 0; i < result.length; i++) {
        let imgEl = document.createElement("img");
        imgEl.setAttribute("class", "thumbnail");
        imgEl.src = `/images/${result[i]}`;
        let imageEl = document.getElementById("preview");
        imageEl.appendChild(imgEl);
      }
    }, 2000);
  };
  imgArr();
}

getImage();
