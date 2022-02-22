function getImage() {
  fetch(`/api/products`).then((res) => {
    if (res.ok) {
      res.json().then((data) => {
          getInfo(data);
      });
    } else {
      alert(res.statusText);
    }
  });
}
// get values 
getInfo = (data) => {

  const imagArr = data.map(({image, id }) => ({
    name: image,
    value: id,
  }));

  const date = data.map(({category}) => category);

  const dateArr = date.map(({id, event_date})=({
    name: event_date,
    value:id,
  }));



  




setInterval(() => {
  console.log(dateArr
    )
 console.log('data',data);
  const result = imagArr.map(({ name }) => name);
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