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

  const dateArr = date.map(({id, event_time})=>({
    name: event_time,
    value:id,
  }));
  newDate = dateArr.map(({name})=>name)

  // var today = new Date();
  // var newDate = today.getFullYear()+"-"+(today.getMonth()+1)+'-'+today.getDate();
  // console.log(date);
  // if(newDate== date){

 console.log('data',newDate);
  const result = imagArr.map(({ name }) => name);
  for (let i = 0; i < result.length; i++) {
    let imgEl = document.createElement("img");
    imgEl.setAttribute("class", "thumbnail");
    imgEl.src = `/images/${result[i]}`;
    let imageEl = document.querySelector(".item");
    imageEl.appendChild(imgEl);
  }
};
  // }else {
  //   alert('nowproduct')
  // }

getImage();